"use client";
import React from "react";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// https://mui.com/material-ui/react-menu/ -- HOW TO USE MUI MENU COMPONENT --

const Links: React.FC = () => {
  return (
    <nav className=" py-2">
            <ul className="flex flew-row gap-5">
                
            <li className="curson-pointer hover:underline">
            <Link href="https://www.linkedin.com/in/dillon-tall-419510317/?skipRedirect=true"
            className="flex items-center gap-2"
            target="_blank"
            > 
            <FaLinkedin/>
            Linkedin
            </Link>
            </li>

            <li className="curson-pointer hover:underline">
            <Link href="https://github.com/DillonT15"
            className="flex items-center gap-2"
            target="_blank"
            > 
            <FaGithub/>
            Github
            </Link>
            </li>



            <li className="curson-pointer hover:underline">
            <Link href="mailto:dillontall15@gmail.com"
            className="flex items-center gap-2"
            target="_blank"
            > 
            <MdEmail />
            Email
            </Link>
            </li>


            </ul>
        </nav>
  );
};
export default Links;
