import React from "react";
import Link from "next/link";

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/about" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors mb-8 inline-block">
          ← Back to About
        </Link>

        <h1 className="text-4xl font-bold mb-2">Experience</h1>
        <p className="text-slate-400 mb-12">My professional background and work history.</p>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white">IT Helpdesk</h3>
            <p className="text-cyan-400 text-sm mb-4">
              Southern Connecticut State University · August 2024 – Present
            </p>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>Provide frontline IT support to campus faculty, students, and staff</li>
              <li>Resolve technical issues including account access, software troubleshooting, and hardware malfunctions</li>
              <li>Address issues through in-person assistance, phone calls, and an online support ticket system</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Consultant</h3>
            <p className="text-cyan-400 text-sm mb-4">
              Kelly Services for General Electric · July 2022 – December 2022
            </p>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>Database conversion project using iManage and GE libraries to transfer data to a secure environment for highly confidential documents</li>
              <li>Reviewed documents and extracted critical information into Excel spreadsheets</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;