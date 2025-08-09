"use client";

import Link from "next/link";
import { Home, User, FolderGit2, Star, Mail } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden md:flex sticky top-0 h-dvh flex-col justify-between border-r border-white/10 p-6">
      <div>
        <Link href="#home" className="block text-2xl font-extrabold tracking-tight">
          <span className="text-gradient">emir</span>
        </Link>
        <p className="mt-3 text-sm text-white/70">
          Hey, I’m Emir btw 👋 I build playful, performant web things.
        </p>
      </div>
      <nav className="flex flex-col gap-2 mt-8">
        <NavItem href="#home" label="Home" icon={<Home size={18} />} />
        <NavItem href="#about" label="About" icon={<User size={18} />} />
        <NavItem href="#highlights" label="Highlights" icon={<Star size={18} />} />
        <NavItem href="#contact" label="Contact" icon={<Mail size={18} />} />
      </nav>
      <div className="text-xs text-white/50">© {new Date().getFullYear()} Emir</div>
    </aside>
  );
}

export function MobileNav() {
  const items = [
    { href: "#home", icon: <Home size={18} />, label: "Home" },
    { href: "#about", icon: <User size={18} />, label: "About" },
    { href: "#highlights", icon: <Star size={18} />, label: "Highlights" },
    { href: "#contact", icon: <Mail size={18} />, label: "Contact" },
  ];
  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <ul className="flex items-center gap-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-white/5 transition-colors"
    >
      <span className="opacity-75 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}

