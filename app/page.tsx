/*import Image from "next/image";*/
import Intro from "../components/intro";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1>Dillon Tall</h1>

      <h2>CSC-543-01 </h2>
      <p>Portfolio Site (Testing):</p>

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
        <li>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placera</li>
        <li>n id cursus mi pretium tellus duis convallis.</li>
        <li>empus leo eu aenean sed diam urna tempor. </li>
      </ul>
        <Intro />
      </section>

      {/* Section 2 (Currently for additional information) */}
            <section
        style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#587f97',
        }}
        >
      <h4>Additional Information:</h4>
      <ul>
      <li>empus leo eu aenean sed diam urna tempor. </li>
      </ul>
      <Intro />
      </section>

      

      </main>
    </div>
  );
}
