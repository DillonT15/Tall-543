'use client';
import React from 'react';
import { FaComputer } from "react-icons/fa6";
const Header: React.FC = () => {
return (
    
    
    <header className="flex items-center justify-between bg-slate-700 p-4">

        {/* left icon (currently computer logo)*/}
        <div className="flex items-center space-x-5">
            <span className="text-5xl font-bold bg-slate-600 rounded-md"> <FaComputer/> </span>
            <h1 className="text-xl font-bold">Dillon Tall Portfolio</h1>
        </div>
        {/* Right side nav with 3 placeholder items*/}
        <nav className="bg-slate-600 px-4 py-2">
            <ul className="flex space-x-6">
                <li className="curson-pointer hover:underline bg-slate-500">Home</li>
                <li className="curson-pointer hover:underline bg-slate-500">Projects</li>
                <li className="curson-pointer hover:underline bg-slate-500">Contact</li>
            </ul>
        </nav>
    </header>
    
    );
};
export default Header;