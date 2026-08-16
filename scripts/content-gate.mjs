#!/usr/bin/env node
/**
 * 內容發布閘門 — build 前擋下未經查證的宣稱
 *
 * 起因：2026-03-14 一次產出 83 篇 SEO 文章，內含大量無來源的成效百分比與
 * 虛構案例（「台中某東方美加盟主」「食材浪費降低 40%」「970 家門市」），
 * 掛在真實客戶品牌下做加盟招商，公開約 5 個月才被發現。
 * 2026-08-16 全數清除。此閘門確保同樣的東西不會再進 build。
 *
 * 用法：npm run gate（build 前自動執行）
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const TARGETS = ["content", "src"];
// .svg 納入：Codex 指出圖片文字可繞過閘門，SVG 是唯一機器讀得到文字的圖片格式
const EXT = [".md", ".mdx", ".ts", ".tsx", ".svg"];

const RULES = [
  {
    code: "成效百分比",
    why: "宣稱導入後提升/降低多少 %，屬成效承諾，無第三方來源不得使用",
    re: /(提升|增加|成長|降低|減少|節省|下降|縮短|省下)[^。\n]{0,12}?\d+(\.\d+)?\s*%/,
  },
  {
    code: "負號成效標語",
    why: "如「人力成本 -50%」這種標語式成效承諾",
    re: /[-−]\s?\d+(\.\d+)?\s*%/,
  },
  {
    code: "虛構案例",
    why: "某門市／某加盟主／加盟主心聲等化名場域，等同編造證言",
    re: /(某(?!些|種|個程度)[^\s，。]{0,6}(門市|店(?!型)|加盟主|業者|客戶)|加盟主心聲|門市反饋|學員心聲|老闆心聲|實際案例)/,
  },
  {
    code: "精確評分",
    why: "4.89 星這類無來源評分",
    re: /\d\.\d{1,2}\s*星/,
  },
  {
    code: "無出處統計",
    why: "引用調查/研究但未標明可查證出處",
    re: /(根據|依據|研究顯示|調查顯示|統計顯示|數據顯示)[^。\n]{0,30}?\d+(\.\d+)?\s*%/,
  },
  {
    code: "絕對化成效詞",
    why: "不含數字但暗示保證的用語。2026-08-16 Codex 稽核指出原規則只抓數字，「完全免費」「零浪費」「獲利公式」全部漏網",
    // 「保證金」是名詞不是承諾；否定語境（不等於躺著賺／無法保證成功）由 ALLOW 白名單放行
    re: /(完全免費|永久免費|零浪費|零風險|零失誤|穩賺|必賺|獲利公式|賺錢公式|穩定獲利|輕鬆獲利|包回本|保證(?!金)(獲利|成功|賺|收入|回本)|絕對不會)/,
  },
  {
    code: "未標來源的量體",
    why: "造訪人次／會員數等流量數字。第三方場域數據若標明出處（如高雄市文化局統計）由白名單放行",
    re: /年度造訪人次|累計\s*\d{3,}\s*(人次|會員|筆)/,
  },
  {
    code: "規模宣稱",
    why: "門市數／車隊數／年資等規模數字，只准用 1987 年創立這類可查證事實",
    re: new RegExp(
      "\\d{3,}\\s*[家間]\\s*(以上\\s*)?(門市|店|分店)" +
        "|\\d{2,}\\s*[家間台輛]\\s*(以上\\s*)?(物流車|配送車|車隊|專車|冷鏈車)" +
        "|傳承\\s*\\d+\\s*年|\\d+\\s*\\+\\s*年" +
        "|\\d{2,}\\s*(多年|年以上)\\s*(的\\s*)?(實戰|產業|連鎖|經驗)" +
        "|(192|970|4,?600|2,?500)\\s*\\+?\\s*(家|間|台|輛|車隊|門市|店)"
    ),
  },
];

/**
 * 行級白名單。誤判時放行，不得為了讓閘門歸零而刪掉正確內容。
 * 三類：
 *  a) 教讀者去要求對方提出證據 — 保護加盟主的內容
 *  b) 否定語境的警語 — 「加盟不等於躺著賺」「無法保證成功」比喊口號更有價值
 *  c) 已標明第三方出處的數據 — 有來源就不是編的
 */
const ALLOW =
  /(是否提供|要求提供|請對方提供|可否提供|索取|請總部提供)|(不等於|不代表|並非|無法|不能|沒有人能|別以為|不要以為|不保證|看起來|實際失敗|卻這麼高)[^。\n]{0,16}(保證|躺著賺|穩賺|零風險|成功|不賠)|(根據|依據|出處|資料來源)[^。\n]{0,20}(統計|調查|局|署|部|協會|研究所|公司)|(完全免費|免費)[^。\n]{0,40}(Google|Facebook|LINE|Instagram|YouTube|商家檔案|Business Profile)|(Google|Facebook|LINE|Instagram|YouTube|商家檔案|Business Profile)[^。\n]{0,40}(完全免費|免費)|沒有任何[^。\n]{0,12}(能|可以)保證/;

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e);
    if (/[\\/](node_modules|\.next|out)[\\/]?$/.test(p)) continue;
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.some((x) => p.endsWith(x))) out.push(p);
  }
  return out;
}

const hits = [];
for (const t of TARGETS) {
  for (const f of walk(join(ROOT, t))) {
    const lines = readFileSync(f, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (ALLOW.test(line)) return;
      for (const r of RULES) {
        if (r.re.test(line)) {
          hits.push({
            file: relative(ROOT, f).replace(/\\/g, "/"),
            line: i + 1,
            code: r.code,
            why: r.why,
            text: line.trim().slice(0, 120),
          });
          break;
        }
      }
    });
  }
}

if (hits.length === 0) {
  console.log("✅ 內容閘門通過：無未經查證的宣稱");
  process.exit(0);
}

console.error(`\n❌ 內容閘門擋下 ${hits.length} 處未經查證的宣稱：\n`);
const byCode = {};
for (const h of hits) (byCode[h.code] ||= []).push(h);
for (const [code, list] of Object.entries(byCode)) {
  console.error(`【${code}】${list[0].why}`);
  for (const h of list.slice(0, 8)) {
    console.error(`  ${h.file}:${h.line}`);
    console.error(`    ${h.text}`);
  }
  if (list.length > 8) console.error(`  …另有 ${list.length - 8} 處`);
  console.error("");
}
console.error("處理方式：");
console.error("  · 成效數字 → 改成機制說明（做了什麼、為什麼有用），不給數字");
console.error("  · 虛構案例 → 整段刪除或改成不指涉特定門市的原理說明");
console.error("  · 第三方統計 → 標出可查證來源，否則刪除。禁止自行編造來源");
console.error("  · 規模宣稱 → 只准用「1987 年創立」「台北市萬華區東園街」這類可查證事實");
console.error("\n⚠️ 禁止為了通過閘門而新增任何數字、案例或來源。這是減法，不是重寫。\n");
process.exit(1);
