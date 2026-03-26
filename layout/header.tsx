'use client';
import React from 'react';
import Branding from './branding';
import Nav from './nav';
import Links from './links';
import { FaComputer } from "react-icons/fa6";
const Header: React.FC = () => {
return (
    
    
    <header className="relative flex items-center bg-gray-900 p-4">

        {/* left icon (currently computer logo)*/}
        <div className="flex items-center space-x-5">

            {/*Not using branding yet <Branding/>*/} 

            <span className="text-5xl font-bold rounded-md"> <FaComputer/> </span>
            <h1 className="text-xl font-bold">Dillon Tall</h1>
        </div>
 {/* Added navigation to header*/}
    <div className="absolute left-1/2 transform -translate-x-1/2">
        <Nav />
        </div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-4">
  <Links />
</div>
    
    </header>
    
    
    );
};
export default Header;