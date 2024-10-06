import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../lib/api/Axios";

export default function PackageComponent({ packageItem }) {
  return (
    packageItem && (
      <div>
        <figure className="w-full relative">
          <div className="absolute top-[20px] end-0 bg-primary p-1.5 text-white">
            <h6 className="text-sm">
              <span className="font-bold text-xl">
                {/* TODO */}${packageItem.price} 50{" "}
              </span>{" "}
              / per person
            </h6>
          </div>
          <Link to={`/package/${packageItem._id}`}>
            {packageItem.image.length != 0 ? (
              packageItem.image.length > 1 && (
                <img
                  src={baseURL + packageItem.image[0].url}
                  alt="destination"
                  className="w-full h-72 object-contain"
                />
              )
            ) : (
              <img
                src={"/images/img17.jpg"}
                alt="destination"
                className="w-full h-80"
              />
            )}
          </Link>
          <div className="mx-5 absolute top-[93%] left-[0.5%] right-[0.5%] z-10 p-3 bg-secondary text-white text-xs">
            <ul className="flex justify-between flex-wrap [&>li>i]:pe-2 [&>li]:ps-2 divide-x ">
              <li>
                <i className="far fa-clock"></i>
                <span>{packageItem.duration.day}D</span>/
                <span>{packageItem.duration.nights}N</span>
              </li>
              <li>
                <i className="fas fa-user-friends"></i>
                People: 5
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {packageItem?.location}
              </li>
            </ul>
          </div>
        </figure>
        <div className="pt-8 px-4">
          <div className="space-y-3">
            <Link to={`/packages/1`}>
              <h3 className="font-bold text-xl">{packageItem.title}</h3>
            </Link>
            <div className="flex gap-x-2 text-gray-400 text-xs">
              <span>(25 reviews)</span>
              <div className="text-primary" title="Rated 5 out of 5">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star text-gray-300" aria-hidden="true"></i>
              </div>
            </div>
            <p className="text-gray-700">{packageItem.description}</p>
            <div className="flex justify-between bottom-1">
              <Link
                to={`/packages/${packageItem._id}`}
                className="w-full text-center p-3 border-t border-e flex items-center gap-x-2 justify-center group hover:text-secondary"
              >
                Book Now
                <i className="fas fa-arrow-right text-primary group-hover:text-secondary"></i>
              </Link>
              <a
                href="#"
                className="w-full text-center p-3 border-t flex items-center gap-x-2 justify-center group hover:text-secondary"
              >
                Wish List
                <i className="far fa-heart text-primary group-hover:text-secondary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
