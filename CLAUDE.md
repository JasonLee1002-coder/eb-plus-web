# EB_Plus_Web — Claude Code 設定

> OWNER: CMO（v3.0 組織，2026-07-03）

## 超級UI 定義用戶說「超級UI」時，自動套用以下完整組合，不需要再問：- **shadcn## 啟動報到ui** — 元件庫底座（Button、Skeleton、Card 等）- **Magic UI** — 動畫元件（NumberTicker、AnimatedGradientText、WordFadeIn）- **framer-motion** — 頁面入場動畫、交錯淡入、hover 上浮- **radial-gradient 背景** — 深色主題光暈背景，製造空氣感- **發光邊框** — 重點卡片 glow border- **骨架屏（Skeleton）** — 所有資料載入狀態- **數字動畫（NumberTicker）** — 所有統計數字- 字型：**Geist Sans**（UI）+ **Geist Mono**（數字## 啟動報到金額）
## 啟動報到
每次新對話開始，主動說：
「✅ EB_Plus_Web 已就緒，Superpowers 內容工作流已啟用。」

## 工作框架（內容 / SEO 版，自動執行）
**只要用戶說要規劃新內容方向，Claude 自動按順序執行：**
1. **Brainstorm** — 先做關鍵字研究、目標受眾、競品分析（skill: superpowers:brainstorming）
2. **Plan** — 文章大綱、發布時程、內部連結規劃（skill: superpowers:writing-plans）
3. **Execute** — 逐篇產出（skill: superpowers:executing-plans）

單篇文章修改或小更新可直接執行。

> ✅ 計畫文件自動存到 `docs/superpowers/plans/`

## 內容規範
- 繁體中文為主
- 每篇文章必須有：標題(H1)、描述(meta)、關鍵字密度 1-2%
- 段落分明，易讀性優先
- 不顯示具體價格或交期

## SEO 優先事項
- Google Analytics 追蹤碼確認存在
- Search Console 已連結
- 每篇新文章發布後用 IndexNow 通知索引

## 部署方式
- 推上 GitHub 後 Vercel 自動部署

## 待處理回報
每次開始工作時，請先檢查 `REPORTS.md`（如果存在），裡面是 Jason 透過 LINE Yuzu-san 回報的問題，請優先處理。

---
## 📱 手機模擬驗證（Jason 2026-06-29 全域強制）

**所有 Web App 部署後，桌面 + 手機三端截圖全部正常才能回報完成：**

```bash
# 1. 桌面（預設）
agent-browser open <url> && agent-browser screenshot --annotate

# 2. iPhone 模擬
agent-browser set device "iPhone 14 Pro"
agent-browser open <url> && agent-browser screenshot --annotate

# 3. Android 模擬
agent-browser set device "Pixel 7"
agent-browser open <url> && agent-browser screenshot --annotate
```

- 確認 RWD 版面正常（無橫向 overflow、文字可讀、按鈕可點）
- 三張截圖全部通過才通知 Jason，有問題自行修復再回報
