"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans flex flex-col">
      <main className="flex-1 flex flex-row items-center justify-center gap-12 px-6 py-24">
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            CS Student · Cybersecurity · IT Support
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Computer Science student focused on Cybersecurity with a strong background
            in IT support. Experienced in collaborating with faculty on project development and deployment.
            Passionate about problem-solving and eager to gain hands-on experience.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/experience"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold text-sm transition-colors"
            >
              View Experience →
            </Link>
            <Link
              href="/education"
              className="px-6 py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-semibold text-sm transition-colors"
            >
              View Education →
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <Image
            src="/cybersecurity.jpg"
            alt="About Image"
            width={600}
            height={300}
            placeholder="blur"
            blurDataURL="/cybersecurity-blur.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default About;