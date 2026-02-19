'use client';
import React from 'react';
import { GiCyberEye } from "react-icons/gi";

const Aside: React.FC = () => {
return (

    <aside className="flex flex-col items-center bg-neutral-800 text-white w-52 p-4">
      <nav className="mb-8">
        <ul className="flex flex-col space-y-4 text-center">
            <li>Home</li> 
            <li>Resume</li> 
            <li>Projects</li> 
            <li>Education</li>
            <li>Certifications</li>
        </ul>
        </nav>
    
    <div className="flex items-center justify-center text-6xl bg-slate-200 text-black p-4 rounded-md">
        <GiCyberEye/>
    </div>

    </aside>
    );
};
export default Aside;