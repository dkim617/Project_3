import React from "react";
import image from "../rhythmrBg.jpg";
import Staff from "./staff";
import Toolbox from "./toolbox";
<<<<<<< HEAD
// import image from "../background.jpg";
=======
>>>>>>> b77c2b0c708bdc7268496d9875a1731e8798c6e2

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Home"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:64 px-8">
        <h1 className="text-6xl text-white font-bold styleMe leading-none lg:leading-snug home-name">
          RhythmR
        </h1>
      </section>
      <section>
        <Staff />
      </section>
      <section>
        <Toolbox />
      </section>
    </main>
  );
}
