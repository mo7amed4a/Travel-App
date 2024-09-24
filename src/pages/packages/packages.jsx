import React from "react";

export default function PackagesPage() {
  return (
    <div>
      <div className="-mt-44 md:-mt-36 space-y-10">
        <section
          className="bg-[#555555] h-[50vh] object-cover bg-no-repeat bg-bottom flex justify-center items-center text-white font-bold"
          style={{
            backgroundImage:
              "url(http://192.168.1.2:3000/assets/images/slider-pattern.png)",
          }}
        >
          <h1 className="text-5xl">Tour Packages</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-8 px-4 mx-auto  max-w-[1100px]">
          {[1, 3, 5, 6, 7, 98, 62].map((item, index) => (
            <div key={index}>
              <figure className="w-full relative">
                <div className="absolute top-[20px] end-0 bg-primary p-1.5 text-white">
                  <h6 className="text-sm">
                    <span className="font-bold text-xl">$1,900 </span> / per
                    person
                  </h6>
                </div>
                <a href="#">
                  <img
                    className="w-full h-80"
                    src="http://192.168.1.2:3000/assets/images/img17.jpg"
                    alt=""
                  />
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
                      <i
                        className="fa fa-star text-gray-300"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    luctus nec ullam. Ut elit tellus, luctus nec ullam elit
                    tellpus.
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
          ))}
        </section>
        <section className="flex flex-col justify-center items-center space-y-4">
          <h3 className="flex items-center text-lg font-bold text-primary">
            <span className="w-20 h-0.5 inline-block bg-primary me-2"></span>TRAVEL
            BY ACTIVITY
          </h3>
          <h1 className="text-3xl font-bold">ADVENTURE & ACTIVITY</h1>
          <p className="text-gray-800 w-3/4 md:w-2/4 text-center">
            Mollit voluptatem perspiciatis convallis elementum corporis quo
            veritatis aliquid blandit, blandit torquent, odit placeat.
            Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
            placeat.
          </p>
        </section>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 container-app py-10">
            <div className="flex flex-col items-center border p-10">
              <div className="">
                <a href="#">
                  <img
                    src="http://192.168.1.2:3000/assets/images/icon6.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold">
                  <a href="#">Adventure</a>
                </h4>
                <p className="text-sm">15 Destination</p>
              </div>
            </div>
            <div className="flex flex-col items-center border p-10">
              <div className="activity-icon">
                <a href="#">
                  <img
                    src="http://192.168.1.2:3000/assets/images/icon10.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold">
                  <a href="#">Trekking</a>
                </h4>
                <p>12 Destination</p>
              </div>
            </div>
            <div className="flex flex-col items-center border p-10">
              <div className="activity-icon">
                <a href="#">
                  <img
                    src="http://192.168.1.2:3000/assets/images/icon9.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold">
                  <a href="#">Camp Fire</a>
                </h4>
                <p>7 Destination</p>
              </div>
            </div>
            <div className="flex flex-col items-center border p-10">
              <div className="activity-icon">
                <a href="#">
                  <img
                    src="http://192.168.1.2:3000/assets/images/icon8.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold">
                  <a href="#">Off Road</a>
                </h4>
                <p>15 Destination</p>
              </div>
            </div>
            <div className="flex flex-col items-center border p-10">
              <div className="activity-icon">
                <a href="#">
                  <img
                    src="http://192.168.1.2:3000/assets/images/icon7.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold">
                  <a href="#">Camping</a>
                </h4>
                <p>13 Destination</p>
              </div>
            </div>
            <div className="flex flex-col items-center border p-10">
              <div className="activity-icon">
                <a href="#">
                  <img
                    src="http://192.168.1.2:3000/assets/images/icon11.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold">
                  <a href="#">Exploring</a>
                </h4>
                <p>25 Destination</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
