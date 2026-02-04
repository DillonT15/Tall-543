/*import Image from "next/image";*/
import Intro from "../components/intro";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1>Dillon Tall</h1>

      <h2>CSC-543-01 </h2>
      <p>Portfolio Site (Testing):</p>
      
      <ul>
        <li>Resume</li>
        <li>Work Experience</li>
        <li>Education</li>
        <li>Certifications</li>
      </ul>
      
      <h3>About me:</h3>
      <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. </li>
      </ul>
      
   <h4><ul><li><p>This is</p></li><li><p>using all tags</p></li><li><p>in one line of code</p></li></ul></h4>


      <Intro/>
      </main>
    </div>
  );
}
