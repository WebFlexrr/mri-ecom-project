import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-fit ">
      <Image
        src="/hero-cover.webp"
        width={1000}
        height={0}
        alt="Hero Image"
        className="w-full aspect-video lg:aspect-[16/5] object-cover object-center"
      />
      {/* <div className="carousel-item">
        <Image
          src="/path/to/image.jpg"
          width={1000}
          height={0}
          alt="Hero Image"
          className="carousel-image"
        />

        <div className="carousel-content">
          <h1>TEES</h1>
          <p>Not your usual Bong tees.</p>
          <button className="carousel-button">Own it.</button>
        </div>
      </div>{" "}
      <div className="carousel-navigation">
        <button className="prev">&lt;</button>
        <span>1/4</span>
        <button className="next">&gt;</button>
      </div> */}
    </section>
  );
};

export default Hero;
