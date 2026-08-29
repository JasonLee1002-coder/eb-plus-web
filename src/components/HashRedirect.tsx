"use client";

import { useEffect } from "react";

/**
 * 把常被猜的網址導回首頁對應區塊。
 *
 * 2026-08-29 實測：/franchise 與 /contact 都回 404。這兩個是訪客最常自己
 * 打出來的路徑（尤其是名片或口頭轉述「去官網的加盟頁」之後），撞 404
 * 等於把人擋在門外。站台是靜態輸出（output: export），沒有伺服器端
 * redirect 可用，所以用最小的客戶端跳轉，並附上不靠 JS 也點得到的連結。
 */
export default function HashRedirect({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-secondary-token text-sm">正在前往{label}…</p>
      <a
        href={to}
        className="mt-4 rounded-full bg-[#C8102E] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700"
      >
        沒有自動跳轉？點這裡前往{label}
      </a>
    </main>
  );
}
