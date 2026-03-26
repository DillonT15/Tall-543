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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
     <h1>Skills:</h1>

      </main>
    </div>
  );
}
export default Projects;