import React from "react";
import Link from "next/link";

const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/about" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors mb-8 inline-block">
          ← Back to About
        </Link>

        <h1 className="text-4xl font-bold mb-2">Education</h1>
        <p className="text-slate-400 mb-12">My academic background and achievements.</p>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Southern Connecticut State University</h3>
            <p className="text-cyan-400 text-sm mb-4">
              August 2022 – Expected May 2026
            </p>
            <p className="text-slate-300 mb-4">
              B.S. in Computer Science, Concentration in Cybersecurity · Minor in Mathematics
            </p>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>Dean&apos;s List (2022–2025)</li>
              <li>Current GPA: 3.74</li>
              <li>Relevant Coursework: Secure Coding, Database Systems, Cloud Architecture, Cryptography, Network Security</li>
              <li>Capstone: SCSU World Languages &amp; Literature Website Redesign (HTML/CSS, JavaScript, SQL, XAMPP)</li>
              <li>Major Group Project: Study Group Scheduler (Flask, Python, GCP deployment)</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Shelton High School</h3>
            <p className="text-cyan-400 text-sm mb-4">
              August 2018 – May 2022
            </p>
            <p className="text-slate-300 mb-4">High School Diploma · Graduated with Honors</p>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>AP Computer Science (2021–2022)</li>
              <li>Member of Computer Science Club, Cyberstart America</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Education;