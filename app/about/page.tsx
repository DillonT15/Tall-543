"use client";
import React, { useState } from "react";
import Image from "next/image";
const About: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans flex flex-col">
      <main className="flex-1 flex flex-row items-center justify-center gap-12 px-6 py-24">
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold text-cyan-400 mb-8">About me</h2>
          <p className="mt-4 text-lg">Computer Science student focused on Cybersecurity with a strong background 
              in IT support. Experienced in collaborating with faculty on project development and deployment. 
              Passionate about problem-solving and eager to gain hands-on experience.</p>
        </div>


        <div className="flex-1 flex justify-end">
          <Image
            src="/cybersecurity.jpg"
            alt="About Image"
            width={600}
            height={300}
            placeholder="blur"
            blurDataURL="/cybersecurity-blur.jpg"
          />
        </div>
      </main>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8">Experience</h2>
        
        <div className="space-y-8">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white">IT Helpdesk</h3>
            <p className="text-cyan-400 text-sm mb-2">Southern Connecticut State University | August 2024 - Present</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Provide frontline IT support to campus faculty, students, and staff</li>
              <li>Resolve a wide range of technical issues including account access, software troubleshooting, and physical hardware malfunctions</li>
              <li>Actively addressing and resolving technical issues through in person assistance, phone calls, and an online support ticket system</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Consultant</h3>
            <p className="text-cyan-400 text-sm mb-2">Kelly Services for General Electric | July 2022 - December 2022</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Database conversion project using iManage and GE libraries to transfer data and documents to a more secure environment for highly confidential documents</li>
              <li>Reviewing documents and pulling critical information into excel spreadsheets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8">Education</h2>
        
        <div className="space-y-8">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Southern Connecticut State University (SCSU)</h3>
            <p className="text-cyan-400 text-sm mb-2">August 2022 Expected Graduation May 2026</p>
            <p className="text-gray-300 mb-4">Pursuing a B.S. in Computer Science with a concentration in Cybersecurity, Minor in Mathematics.</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Dean's List (2022–2025)</li>
              <li>Current GPA: 3.74</li>
              <li>Relevant Coursework: Secure Coding, Database Systems, Cloud Architecture, Cryptography, Network Security</li>
              <li>Capstone: SCSU World Languages &amp; Literature Website Redesign (HTML/CSS, JavaScript, SQL, XAMPP)</li>
              <li>Major Group Project: Study Group Scheduler (Flask, Python, GCP deployment)</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Shelton High School</h3>
            <p className="text-cyan-400 text-sm mb-2">August 2018 – May 2022</p>
            <p className="text-gray-300 mb-4">High School Diploma.</p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>AP Computer Science (2021–2022)</li>
              <li>Member of Computer Science Club, Cyberstart America</li>
              <li>Graduated with honors</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;