"use client";
import React from "react";
import Link from 'next/link';
// https://mui.com/material-ui/react-menu/ -- HOW TO USE MUI MENU COMPONENT --

const Header: React.FC = () => {
  return (
    <nav className="px-4 py-2 text-xl ">
            <ul className="flex flew-row gap-5">
                <li className="curson-pointer hover:underline">
                  <Link href="/"> Home</Link>
                  </li>
                <li className="curson-pointer hover:underline">
                  <Link href="/about"> About</Link>
                  </li>
                <li className="curson-pointer hover:underline">
                  <Link href="/projects"> Projects</Link></li>

                <li className="curson-pointer hover:underline">
                  <Link href="/contact"> Contact</Link></li>


                <li className="curson-pointer hover:underline">
                  <Link href="/skills"> Skills</Link></li>

            </ul>
        </nav>
  );
};
export default Header;
