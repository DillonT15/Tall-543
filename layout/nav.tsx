"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row gap-1">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "text-cyan-400 bg-cyan-500/10"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;