"use client";

import { useState } from "react";

/**
 * 加盟洽詢表單
 *
 * 2026-08-16 建立。原本 #contact 區有表單外觀但沒有 action、沒有 submit 處理，
 * 按下去什麼都不會發生——訪客以為留了資料，實際上全部掉進虛空。
 *
 * 設計依據（Codex 建議書 docs/codex-funnel-round1_20260816.md）：
 *  - 必填欄位控制在五項內，手機好填
 *  - 不承諾「X 工作天內回覆」——總部人力與實際處理速度尚未確認，
 *    承諾了做不到是失信。只承諾系統做得到的事：「資料已送達」
 *  - 不讓申請人選店型——正式招商範圍未經東方美確認
 *  - 個資告知直接顯示在送出前，不是角落一個小連結（個資法第 8 條）
 *  - 送出後給案件編號，讓申請人有依據可追
 *
 * 收件方式：POST 到 NEXT_PUBLIC_INQUIRY_ENDPOINT。
 * 這個端點應由「東方美自己」申請（Formspree／Web3Forms／Google Apps Script 皆可），
 * 名單直接進東方美的信箱與表單，我方不經手、不留副本——這是 Codex 的第一原則：
 * 「加盟名單從第一筆開始就應由東方美持有，不建議先寫入我方系統再於日後移轉。」
 *
 * ⚠️ 端點未設定時，表單會顯示「請直接來電」而不是假裝送出成功。
 *    網站因為是靜態輸出（output: export），無法自建 API route。
 */

type Status = "idle" | "sending" | "done" | "error";

/** 案件編號：日期 + 5 碼亂數 */
function makeCaseNo() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
    d.getDate()
  ).padStart(2, "0")}`;
  return `EB-${ymd}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

const AREAS = [
  "台北市", "新北市", "基隆市", "桃園市", "新竹縣市", "苗栗縣",
  "台中市", "彰化縣", "南投縣", "雲林縣", "嘉義縣市",
  "台南市", "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", "離島", "尚未決定",
];

const STAGES = [
  { v: "learning", l: "初步了解" },
  { v: "searching", l: "正在找店面" },
  { v: "has-site", l: "已有地點" },
  { v: "other", l: "其他" },
];

const TIMES = [
  { v: "morning", l: "上午" },
  { v: "afternoon", l: "下午" },
  { v: "evening", l: "晚上" },
  { v: "any", l: "都可以" },
];

const INPUT =
  "w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white placeholder-white/35 transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]";
const LABEL = "mb-1.5 block text-sm text-white/70";

export default function FranchiseInquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [caseNo, setCaseNo] = useState("");
  const [err, setErr] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErr("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    const endpoint = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT;
    if (!endpoint) {
      // 不假裝送出成功——沒有收件位置就誠實說
      setErr("線上洽詢尚未開通，請直接與東方美總部聯繫。");
      setStatus("error");
      return;
    }

    // 案件編號在前端產生並一起送出，讓申請人與總部有共同的追蹤依據
    const no = makeCaseNo();

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          案件編號: no,
          送件時間: new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" }),
          來源: "官網加盟洽詢表單",
        }),
      });
      if (!res.ok) {
        setErr("送出時發生問題，請稍後再試或直接與總部聯繫。");
        setStatus("error");
        return;
      }
      setCaseNo(no);
      setStatus("done");
    } catch {
      setErr("網路連線有問題，請確認後再試一次，或直接來電洽詢。");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-[#F5A623]/30 bg-[#F5A623]/[0.06] p-8 text-center">
        <h3 className="text-primary-token mb-3 text-xl font-bold">資料已送達東方美總部</h3>
        <p className="text-secondary-token mb-5 text-sm leading-relaxed">
          感謝您的加盟洽詢。我們將依序安排專人與您聯繫，
          <br className="hidden sm:block" />
          實際聯繫時間依案件量而定。
        </p>
        {caseNo && (
          <p className="text-muted-token mb-5 text-sm">
            案件編號　<span className="font-mono text-[#F5A623]">{caseNo}</span>
            <br />
            <span className="text-xs">後續聯繫或需要更正資料時，請提供此編號。</span>
          </p>
        )}
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-white/60 underline underline-offset-4 hover:text-white/90"
        >
          再填一筆
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.12] bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
      <h3 className="text-primary-token mb-2 text-center text-xl font-bold">加盟洽詢</h3>
      <p className="text-muted-token mb-6 text-center text-sm">
        留下聯絡方式，總部會安排專人與您聯繫。
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={LABEL} htmlFor="name">
              姓名 <span className="text-[#C8102E]">*</span>
            </label>
            <input id="name" name="name" required maxLength={40} placeholder="您的姓名" className={INPUT} />
          </div>
          <div>
            <label className={LABEL} htmlFor="phone">
              手機 <span className="text-[#C8102E]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              pattern="[0-9\-\+\s()]{8,20}"
              placeholder="09xx-xxx-xxx"
              className={INPUT}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={LABEL} htmlFor="area">
              希望加盟的區域 <span className="text-[#C8102E]">*</span>
            </label>
            <select id="area" name="area" required defaultValue="" className={`${INPUT} bg-[#1a222c]`}>
              <option value="" disabled>
                請選擇
              </option>
              {AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={LABEL} htmlFor="stage">
              目前進度 <span className="text-[#C8102E]">*</span>
            </label>
            <select id="stage" name="stage" required defaultValue="" className={`${INPUT} bg-[#1a222c]`}>
              <option value="" disabled>
                請選擇
              </option>
              {STAGES.map((s) => (
                <option key={s.v} value={s.l}>
                  {s.l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={LABEL} htmlFor="contactTime">
            方便聯繫的時段 <span className="text-[#C8102E]">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {TIMES.map((t, i) => (
              <label
                key={t.v}
                className="cursor-pointer rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition-colors has-[:checked]:border-[#C8102E] has-[:checked]:bg-[#C8102E]/15 has-[:checked]:text-white"
              >
                <input
                  type="radio"
                  name="contactTime"
                  value={t.l}
                  required
                  defaultChecked={i === 3}
                  className="sr-only"
                />
                {t.l}
              </label>
            ))}
          </div>
        </div>

        <details className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
          <summary className="cursor-pointer text-sm text-white/70">
            選填：Email 與想了解的內容
          </summary>
          <div className="mt-4 space-y-4">
            <div>
              <label className={LABEL} htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" maxLength={80} placeholder="電子信箱" className={INPUT} />
            </div>
            <div>
              <label className={LABEL} htmlFor="note">
                想了解的內容
              </label>
              <textarea
                id="note"
                name="note"
                rows={3}
                maxLength={500}
                placeholder="例如：目前店面坪數、想了解的項目"
                className={INPUT}
              />
            </div>
          </div>
        </details>

        {/* 個資告知：個資法第 8 條要求蒐集時明確告知，不能只放角落連結 */}
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
          <label className="flex cursor-pointer items-start gap-2.5">
            <input
              type="checkbox"
              required
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#C8102E]"
            />
            <span className="text-xs leading-relaxed text-white/70">
              我同意東方美實業股份有限公司為
              <b className="text-white/90">加盟洽詢與後續聯繫</b>
              之目的，蒐集、處理及利用上述個人資料。
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPrivacy((v) => !v);
                }}
                className="ml-1 text-[#F5A623] underline underline-offset-2"
              >
                {showPrivacy ? "收合說明" : "展開完整說明"}
              </button>
            </span>
          </label>

          {showPrivacy && (
            <div className="mt-3 space-y-1.5 border-t border-white/10 pt-3 text-xs leading-relaxed text-white/55">
              <p>
                <b className="text-white/75">蒐集單位：</b>
                東方美實業股份有限公司
              </p>
              <p>
                <b className="text-white/75">蒐集目的：</b>
                加盟洽詢受理、聯繫與後續評估
              </p>
              <p>
                <b className="text-white/75">個資類別：</b>
                姓名、手機、電子郵件、希望加盟區域與您主動提供的內容
              </p>
              <p>
                <b className="text-white/75">利用期間與範圍：</b>
                自送出日起至洽詢案件結束後之合理期間，於台灣地區、由本公司及受託協助處理之服務商以電子或紙本方式利用
              </p>
              <p>
                <b className="text-white/75">您的權利：</b>
                可向本公司請求查詢、閱覽、補充、更正、停止利用或刪除您的個人資料，請提供案件編號以利查詢
              </p>
              <p>
                <b className="text-white/75">不提供的影響：</b>
                未提供姓名與聯絡方式，將無法安排專人與您聯繫
              </p>
            </div>
          )}
        </div>

        {err && (
          <p className="rounded-lg border border-[#C8102E]/30 bg-[#C8102E]/10 px-4 py-3 text-sm text-[#e8607a]">
            {err}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-[#C8102E] py-3.5 text-lg font-bold text-white transition-colors hover:bg-red-700 disabled:opacity-50"
        >
          {status === "sending" ? "送出中…" : "送出洽詢"}
        </button>

        <p className="text-center text-xs leading-relaxed text-white/40">
          送出後將顯示案件編號。實際聯繫時間依案件量而定。
        </p>
      </form>
    </div>
  );
}
