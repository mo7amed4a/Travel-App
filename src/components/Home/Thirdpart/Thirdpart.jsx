import React from "react";
import img from "../../../images/wall122.jpg";
import { Link } from "react-router-dom";
import PackageComponnet from "../../packegs/packageComponnet";

export default function Thirdpart() {
  let carts = [
    {
      img1: img,
      clock: "5D/4N",
      people: "8",
      location: "Canada",
      price: "1,230",
      title: "Experience the natural beauty of island",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium recusandae modi, adipisci magni similique",
    },
    {
      img1: img,
      clock: "5D/4N",
      people: "8",
      location: "Canada",
      price: "1,660",
      title: "Experience the natural beauty of island",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium recusandae modi, adipisci magni similique",
    },
    {
      img1: img,
      clock: "5D/4N",
      people: "8",
      location: "Canada",
      price: "1,230",
      title: "Experience the natural beauty of island",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium recusandae modi, adipisci magni similique",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center mb-4">
          <div className="w-24 bg-red-500 h-[3px] inline-block"></div>
          <p className="ml-2 text-red-500 uppercase font-semibold text-sm">
            Explore great places
          </p>
        </div>

        <h2 className="text-5xl font-bold mb-4">Popular Packages</h2>

        <p className="text-lg text-gray-600 max-w-2xl">
          Mollit voluptatem perspiciatis convallis elementum corporis quo
          veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing
          repudiandae eius cursus? Nostrum magnis maxime curae placeat.
        </p>
      </div>

      <div className="container mx-auto p-4 flex gap-4 justify-center items-center  flex-wrap">
        {carts.map((cart, index) => (
          <PackageComponnet key={index}/>
        ))}
      </div>

      <div className="flex justify-center text-center my-6 mx-4">
        <button className="bg-red-500 text-white px-4 py-3 text-base md:text-lg lg:text-xl rounded-md w-full sm:w-auto">
          VIEW ALL PACKAGES
        </button>
      </div>
    </div>
  );
}
