import React from "react";

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      <main className="max-w-3xl mx-auto px-6 py-24 space-y-10">

        <div>
          <h1 className="text-4xl font-bold mb-2">Skills</h1>
          <p className="text-slate-400">A breakdown of my technical skills and certifications.</p>
        </div>

        <div className="space-y-8">

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Programming Languages</h2>
            <p className="text-slate-300">Python, Java, HTML, CSS, SQL, Haskell, PHP</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Cybersecurity & Networking</h2>
            <p className="text-slate-300">Security fundamentals, encryption & access control, vulnerability assessment, Wireshark, Nmap, OWASP ZAP</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Cloud Platforms</h2>
            <p className="text-slate-300">Google Cloud Platform, AWS, Microsoft Azure</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Version Control & Collaboration</h2>
            <p className="text-slate-300">Git, GitHub, Agile & Scrum, team collaboration, problem solving</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">IT Support</h2>
            <p className="text-slate-300">Helpdesk experience, hardware & software troubleshooting, user support, ticket systems</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Operating Systems</h2>
            <p className="text-slate-300">Windows administration, Linux / Unix command line</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Frameworks & Libraries</h2>
            <p className="text-slate-300">React, Next.js, Tailwind CSS, Node.js, Flask, Mongoose</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-cyan-400 mb-2">Microsoft 365 & Adobe</h2>
            <p className="text-slate-300">Excel, Word, PowerPoint, Copilot, Photoshop, Illustrator</p>
          </div>

        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-lg font-semibold text-cyan-400 mb-2">Certifications</h2>
          <p className="text-slate-300">Google Cybersecurity Certificate — Google / Coursera, 2024</p>
        </div>

      </main>
    </div>
  );
};

export default SkillsPage;