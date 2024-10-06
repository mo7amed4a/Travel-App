import React, { useEffect, useState } from "react";
import img from "../../../images/wall122.jpg";
import { Link } from "react-router-dom";
import { Axios } from "../../../lib/api/Axios";

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
        {packages?.map((item, index) => (
          // <PackageComponnet key={index}/>
          <div className="flex flex-col md:flex-row" key={index}>
            <div className="md:w-[350px] shadow-lg relative">
              <div>
                {item.image.length != 0 ? (
                  item.image.length > 1 ? (
                    item.image.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="destination"
                        className=""
                      />
                    ))
                  ) : (
                    <img src={item.image[0]} alt="destination" className="" />
                  )
                ) : (
                  <img src={'/images/img17.jpg'} alt="destination" className="" />
                )}
                <div className="absolute top-1 right-1 bg-primary text-white px-4 py-2 rounded sm:text-sm md:text-base lg:text-lg">
                  <span className="font-bold">${item.price}</span>
                  {/* TODO */}
                  <span className="text-xs md:text-sm"> 50 / per person</span>
                </div>
                <div className="w-[95%] bg-secondary relative bottom-[30px]  left-[2%] right-[2%]">
                  <div className="flex text-white py-2 justify-around flex-wrap">
                    <div className="flex items-center gap-2">
                      <span>
                        <i className="fa-regular fa-clock"></i>{" "}
                        <span>{item.duration.day}D</span>/
                        <span>{item.duration.nights}N</span>
                      </span>
                      <div className="w-[2px] bg-[#ffffff] h-[25px]"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>
                        <i className="fa-regular fa-user"></i>{" "}
                        <span className="ml-2">People: 5</span>
                      </span>
                      <div className="w-[2px] bg-[#ffffff] h-[25px]"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        <span className="ml-2">{item.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 -mt-10">
                <Link to={`/packages/1`}>
                  <h2
                    className="mt-4"
                    style={{ fontSize: "25px", fontWeight: "bold" }}
                  >
                    {item.title}
                  </h2>
                </Link>
                <p>{item.description}</p>
                <div
                  className="flex font-bold divide-x mt-5 divide-gray-300 border-t border-t-gray-300"
                  style={{ justifyContent: "space-around" }}
                >
                  <Link to={`/packages/${item._id}`} className="pointer-events-auto p-3">
                    Book Now{" "}
                    <i className="fa-solid text-red-500 fa-arrow-right"></i>
                  </Link>
                  <Link className="ps-10 p-3">
                    Wish List{" "}
                    <i className="fa-regular text-red-500 fa-heart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
