import React from "react";
import image from "../background.jpg";

export default function Home() {
  return(
    <main>
      <img src={image} alt="backgroung image" className="absolute object-cover w-full h-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"> 
      <div class = 'container-home projects'>
            <h1 className="text-green-100 font-bold cursive leading-none lg:leading-snug home-name" class="home-h1">Hi. I'm Ishank Choudhary.</h1>
      <div class="overlay"></div>
      </div>
      </section>
    </main>
  );
}