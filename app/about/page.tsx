"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

const About: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-20 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        
        <p className="mt-4 text-lg">Computer Science student focused on Cybersecurity with a strong background 
            in IT support. Experienced in collaborating with faculty on project development and deployment. 
            Passionate about problem-solving and eager to gain hands-on experience.</p>

 {/* Placeholder image change later*/}
        <Image
          src="/cybersecurity.jpg"
          alt="About Image"
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/cybersecurity-blur.jpg"
        />
        <p className="mt-4 text-lg">(Placeholder test image)</p>

      </main>
    </div>
  );
};
export default About;