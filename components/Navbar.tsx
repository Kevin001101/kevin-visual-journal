import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/galleries", label: "影像" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/95">
      <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          className="w-fit text-sm font-medium uppercase tracking-[0.24em] text-ink"
        >
          KEVIN 影像日志
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group transition-colors hover:text-accent"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
