export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-ink">Kurt Baker</p>
        <p className="text-xs text-ink-muted">
          © {year} Kurtis Baker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
