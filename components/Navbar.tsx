import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", zh: "首页" },
  { href: "/journeys", label: "Journeys", zh: "远行" },
  { href: "/trails", label: "Trails", zh: "山径" },
  { href: "/streets", label: "Streets", zh: "街巷" },
  { href: "/places", label: "Places", zh: "到达之地" },
  { href: "/about", label: "About", zh: "关于" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          className="w-fit text-sm font-medium uppercase tracking-[0.24em] text-ink"
        >
          Kevin Visual Journal
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group transition-colors hover:text-accent"
            >
              <span>{item.label}</span>
              <span className="ml-2 text-[11px] normal-case tracking-normal text-muted/75 group-hover:text-accent">
                {item.zh}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
