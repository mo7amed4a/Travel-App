import React from "react";

export default function PackageComponnet() {
  return (
    <div>
      <figure className="w-full relative">
        <div className="absolute top-[20px] end-0 bg-primary p-1.5 text-white">
          <h6 className="text-sm">
            <span className="font-bold text-xl">$1,900 </span> / per person
          </h6>
        </div>
        <a href="#">
          <img className="w-full h-80" src="/images/img17.jpg" alt="" />
        </a>
        <div className="mx-5 absolute top-[93%] left-[0.5%] right-[0.5%] z-10 p-3 bg-secondary text-white text-sm">
          <ul className="flex justify-between [&>li>i]:pe-2 [&>li]:ps-2 divide-x ">
            <li>
              <i className="far fa-clock"></i>
              7D/6N
            </li>
            <li>
              <i className="fas fa-user-friends"></i>
              People: 5
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Malaysia
            </li>
          </ul>
        </div>
      </figure>
      <div className="pt-8 px-4">
        <div className="space-y-3">
          <h3 className="font-bold text-xl">
            <a href="#">Sunset view of beautiful lakeside resident</a>
          </h3>
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
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec
            ullam. Ut elit tellus, luctus nec ullam elit tellpus.
          </p>
          <div className="flex justify-between bottom-1">
            <a
              href="#"
              className="w-full text-center p-3 border-t border-e flex items-center gap-x-2 justify-center group hover:text-secondary"
            >
              Book Now
              <i className="fas fa-arrow-right text-primary group-hover:text-secondary"></i>
            </a>
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
  );
}
