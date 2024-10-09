import React, { useEffect, useState } from "react";
import img from "../../../images/wall122.jpg";
import { Link } from "react-router-dom";
import { Axios } from "../../../lib/api/Axios";
import PackageComponent from "../../packageComponent";

export default function PackageSection() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          data: { packages: data },
        },
      } = await Axios.get("/package?PACKAGE_PER_PAGE=1");
      setPackages(data.slice(0, 3));
      // console.log(data);
    };
    fetchData();
  }, []);

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-8 px-4 mx-auto  max-w-[1100px]">
        {packages?.map((item, index) => (
          <PackageComponent packageItem={item} key={index}/>
          
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
