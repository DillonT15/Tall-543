import React from "react";
import Intro from "@/components/intro"
import User from "@/components/user"
import Link from 'next/link';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const data = await response.json()
  return data;
}


const Home: React.FC = async() => {
  const posts = await getPosts();

  console.log('Posts: ',posts);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      

      {/* Section 1 (currently for about me)*/}
            <section
        style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#2f2e2b',
        }}
      >

      <ul>
        <h3>About me</h3>
        <li>Computer Science student focused on Cybersecurity with a strong background in IT support. 
          Experienced in collaborating with faculty on project development and deployment. 
          Passionate about problem-solving and eager to gain hands-on experience.</li>
      </ul>
        

        </section>
      </main>
    </div>
  );
}

export default Home;