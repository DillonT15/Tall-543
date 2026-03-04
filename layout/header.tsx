'use client';
import React from 'react';
import Branding from './branding';
import Nav from './nav';
import { FaComputer } from "react-icons/fa6";
const Header: React.FC = () => {
return (
    
    
    <header className="flex items-center justify-between bg-slate-700 p-4">

        {/* left icon (currently computer logo)*/}
        <div className="flex items-center space-x-5">

            {/*Not using branding yet <Branding/>*/} 

            <span className="text-5xl font-bold bg-slate-600 rounded-md"> <FaComputer/> </span>
            <h1 className="text-xl font-bold">Dillon Tall Portfolio</h1>
        </div>
 {/* Added navigation to header*/}
        <Nav />
    </header>
    
    );
};
export default Header;