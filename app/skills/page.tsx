import React from "react";
import Link from 'next/link';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json()
  return data;
}
const Projects: React.FC = async() => {
  const posts = await getPosts();
  console.log('Posts: ',posts);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-sans flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-center px-2 py-24">
  
<div className="space-y-8">

  {/* Programming Languages */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block mb-2">
      Programming Languages
    </h2>
    <p>Python, Java, HTML, CSS, SQL, Haskell, PHP (basic)</p>
  </div>

  {/* Cybersecurity & Networking */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-green-400 inline-block mb-2">
      Cybersecurity & Networking
    </h2>
    <p>
      Security fundamentals, encryption & access control, vulnerability assessment,
      Wireshark, Nmap (basic)
    </p>
  </div>

  {/* Cloud Platforms */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-purple-400 inline-block mb-2">
      Cloud Platforms
    </h2>
    <p>Google Cloud Platform, AWS (basic), Microsoft Azure</p>
  </div>

  {/* Version Control */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-yellow-400 inline-block mb-2">
      Version Control & Collaboration
    </h2>
    <p>
      Git, GitHub, Agile & Scrum methodologies, team collaboration,
      problem solving, time management
    </p>
  </div>

  {/* IT Support */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-red-400 inline-block mb-2">
      IT Support & Customer Service
    </h2>
    <p>
      Helpdesk experience, troubleshooting technical issues,
      user support, strong communication skills
    </p>
  </div>

  {/* Operating Systems */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-indigo-400 inline-block mb-2">
      Operating Systems
    </h2>
    <p>Windows administration, Linux/Unix command line</p>
  </div>

  {/* Microsoft 365 */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-blue-600 inline-block mb-2">
      Microsoft 365
    </h2>
    <p>Excel, Word, PowerPoint, Copilot</p>
  </div>

  {/* Adobe */}
  <div>
    <h2 className="text-xl font-semibold border-b-2 border-pink-400 inline-block mb-2">
      Adobe Suite
    </h2>
    <p>Photoshop, Illustrator</p>
  </div>
</div>
</main>
</div>

  );
  
}

export default Projects;