import React from "react";
import { useLocation } from "react-router-dom";

export default function SubHeader({title="Title page"}) {
  return (
    <section
      className="-mt-24 md:-mt-36  bg-[#555555] h-[50vh] object-cover bg-no-repeat bg-bottom flex justify-center items-center text-white font-bold"
      style={{
        backgroundImage: "url(/images/slider-pattern.png)",
      }}
    >
      <h1 className="text-5xl">{title}</h1>
    </section>
  );
}
