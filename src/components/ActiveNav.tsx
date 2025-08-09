"use client";

import Link from "next/link";
import { Home, User, FolderGit2, Star, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#highlights", label: "Highlights", icon: Star },
  { href: "#contact", label: "Contact", icon: Mail },
] as const;

export function SidebarNav() {
  const activeId = useActiveSection();
  return (
    <nav className="flex flex-col gap-2 mt-8 w-full max-w-[200px]">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = activeId ? href === `#${activeId}` : href === "#home";
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={
              "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors border-l-2 " +
              (isActive
                ? "border-[var(--accent-orange)] bg-white/[0.06] text-white"
                : "border-transparent hover:bg-white/5")
            }
          >
            <span className="opacity-75 group-hover:opacity-100 transition-opacity">
              <Icon size={18} />
            </span>
            <span className="font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileBottomNav() {
  const activeId = useActiveSection();
  return (
    <nav className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/10 max-w-[95vw]">
      <ul className="flex items-center gap-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = activeId ? href === `#${activeId}` : href === "#home";
          return (
            <li key={href}>
              <Link
                href={href}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className={"px-3 py-2 rounded-full text-base transition-colors " + (isActive ? "text-[var(--accent-orange)]" : "hover:bg-white/10")}
              >
                <Icon size={20} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function useActiveSection() {
  const [active, setActive] = useState<string | null>("home");
  const ids = useMemo(() => ["home", "about", "highlights", "contact"], []);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const probeY = 140; // px from top used to determine current section
      let current: string | null = elements[0]?.id ?? null;

      // Choose the last section whose top has crossed the probe line
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY) {
          current = el.id;
        }
      }

      // If near the absolute bottom of the page, force last section
      const doc = document.documentElement;
      const nearBottom = doc.scrollTop + window.innerHeight >= doc.scrollHeight - 24;
      if (nearBottom) {
        current = elements[elements.length - 1]?.id ?? current;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Initial run
    update();
    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", onScroll as EventListener);
    };
  }, [ids]);

  return active;
}

