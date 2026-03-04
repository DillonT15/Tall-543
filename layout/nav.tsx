"use client";
import React from "react";
import Link from 'next/link';
// https://mui.com/material-ui/react-menu/ -- HOW TO USE MUI MENU COMPONENT --

const Header: React.FC = () => {
  return (
    <nav className="bg-slate-600 px-4 py-2">
            <ul className="flex flew-row gap-5">
                <li className="curson-pointer hover:underline bg-slate-500">
                  <Link href="/"> Home</Link>
                  </li>
                <li className="curson-pointer hover:underline bg-slate-500">
                  <Link href="/about"> About</Link>
                  </li>
                <li className="curson-pointer hover:underline bg-slate-500">
                  <Link href="/"> Projects</Link></li>
                <li className="curson-pointer hover:underline bg-slate-500">
                  <Link href="/"> Contact</Link></li>
            </ul>
        </nav>
  );
};
export default Header;
