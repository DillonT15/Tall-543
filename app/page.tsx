
import React from "react";
import Link from "next/link";



const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Welcome
        </p>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Dillon Tall
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-3">
          Computer Science / Cyber Security Student
        </p>
        <p className="text-slate-400 text-base max-w-lg mx-auto mb-12 leading-relaxed">
          Graduate student pursuing a Master's in Cybersecurity. Background in
          IT support, data operations, and secure software development.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold text-sm transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-semibold text-sm transition-colors"
          >
            Get In Touch
          </Link>

          <Link
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2"
          >
            Download Resume
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;