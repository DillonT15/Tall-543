"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-slate-500 text-sm">
          Dillon Tall &mdash; CSC-543 Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;