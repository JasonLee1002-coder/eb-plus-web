/**
 * 站台對外狀態的單一開關。
 *
 * Jason 2026-08-16 裁示（「這個站要不要繼續讓 Google 索引？」→「等 domain 申請好」）：
 * 在東方美的正式網域申請下來之前，這個站不進搜尋引擎。
 *
 * 為什麼不是只把某幾頁 noindex：現在掛的是 eb-plus-web.vercel.app，
 * 正式網域一上線所有 URL 都會換一輪，現在累積的索引本來就要重來，
 * 沒有必要讓「假設都已成真」的願景內容在這段期間被搜到、截圖、引用。
 *
 * ⚠️ 正式網域確定後要一起改的三件事（缺一會前後矛盾）：
 *   1. 這裡的 PUBLIC_INDEXING 改 true
 *   2. SITE_URL 換成正式網域（canonical 與 sitemap 都吃這個值）
 *   3. 重新對新網域做一次 IndexNow 推送
 */
export const PUBLIC_INDEXING = false;

/** canonical 與 sitemap 的基準網址。正式網域下來後改這裡，不要散在各檔。 */
export const SITE_URL = "https://eb-plus-web.vercel.app";

/**
 * 線上加盟洽詢是否開放收件。
 *
 * Jason 2026-08-16 裁示（「加盟資訊揭露的流程，誰來建？」→「表單先不對外開放」）：
 * 公平會要求加盟業主在締約或形成預備加盟關係前揭露七類重要資訊，且要能證明確實提供過。
 * 在揭露文件與寄送紀錄齊備前先不收件——反正線上收件端點本來也還沒開通。
 *
 * 開放時要一起確認：NEXT_PUBLIC_INQUIRY_ENDPOINT 已設定、總部電話已填、
 * 揭露文件版本與案件編號可以對得起來。
 */
export const INQUIRY_OPEN = false;
