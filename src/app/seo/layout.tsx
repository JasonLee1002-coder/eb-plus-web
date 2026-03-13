export default function SeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050a15] text-white">
      {/* Minimal header */}
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            回到東方美+ 首頁
          </a>
        </div>
      </header>

      {/* Article content */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">{children}</main>

      {/* Minimal footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-white/20">
        &copy; {new Date().getFullYear()} 東方美集團 Eastern Beauty Group. All
        Rights Reserved.
      </footer>
    </div>
  );
}
