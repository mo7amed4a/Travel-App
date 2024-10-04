import React from "react";
import { TabForPackageDetail } from "../../components/TabForPackageDetail";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { Checkbox, Datepicker, Label } from "flowbite-react";
import SubHeader from "../../components/Sub-Header";

export default function PackagesDetailsPage() {
  return (
    <div className="space-y-10">
      <SubHeader title="Package Details" />
      <section className="grid grid-cols-1 xl:grid-cols-6 container-app gap-5 pb-10">
        <section className="md:col-span-4 space-y-10">
          <article className="space-y-5">
            <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold me-4">
              EXPERIENCE THE NATURAL BEAUTY OF ISLAND
            </h1>
            <figure className="w-full bg-blue-500 relative">
              <a href="#">
                <img
                  className="w-full"
                  src="/images/img27.jpg"
                  alt=""
                />
              </a>
              <div className="absolute top-[93%] inset-x-0 z-10 py-3 bg-secondary text-white text-sm flex justify-center items-center">
                <ul className="flex justify-between [&>li>i]:pe-2 [&>li]:ps-4 divide-x gap-x-4">
                  <li>
                    <i className="far fa-clock"></i>6 days / 5 night
                  </li>
                  <li>
                    <i className="fas fa-user-friends"></i>
                    People: 5
                  </li>
                  <li>
                    <i className="fas fa-map-marked-alt"></i>
                    Norway
                  </li>
                </ul>
              </div>
            </figure>
          </article>
          <TabForPackageDetail />
        </section>

        <div className="md:col-span-2 space-y-10">
          <div className="bg-primary py-5 flex flex-col justify-center items-center space-y-3 text-white">
            <h3>
              <span className="text-2xl font-bold">$649</span> / per person
            </h3>
            <span className="flex text-xl items-center">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStarBorder />
            </span>
          </div>
          <div className="bg-gray-100 p-4 space-y-4">
            <div className="bg-secondary text-center p-5 text-white text-xl font-semibold">
              Booking
            </div>
            <form className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border-gray-300"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full p-2 border-gray-300"
                placeholder="Email"
              />
              <input
                type="number"
                className="w-full p-2 border-gray-300"
                placeholder="Number"
              />
              <Datepicker />
              <p>Add Options</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="tourguide"
                    className="p-2.5 sm:text-base checked:bg-primary focus:ring-primary"
                    defaultChecked
                  />
                  <Label htmlFor="tourguide" className="flex">
                    Tour guide
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="insurance"
                    className="p-2.5 sm:text-base checked:bg-primary focus:ring-primary"
                    defaultChecked
                  />
                  <Label htmlFor="insurance" className="flex">
                    Insurance
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="dinner"
                    className="p-2.5 sm:text-base checked:bg-primary focus:ring-primary"
                    defaultChecked
                  />
                  <Label htmlFor="dinner" className="flex">
                    Dinner
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="bikerent"
                    className="p-2.5 sm:text-base checked:bg-primary focus:ring-primary"
                    defaultChecked
                  />
                  <Label htmlFor="bikerent" className="flex">
                    Bike rent
                  </Label>
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-3 bg-primary text-white font-bold"
              >
                Book Now
              </button>
            </form>
          </div>
          <section className="flex flex-col justify-center text-center items-center space-y-4 bg-gray-100 p-4">
            <h3 className="flex items-center text-sm font-bold text-primary">
              <span className="w-10 h-0.5 inline-block bg-primary me-2"></span>
              TRAVEL TIPS
            </h3>
            <h1 className="text-lg font-bold">
              NEED TRAVEL RELATED TIPS & INFORMATION
            </h1>
            <p className="text-gray-800 text-center text-sm">
              Mollit voluptatem perspiciatis convallis elementum corporis quo
              veritatis aliquid blandit, blandit torquent, odit placeat.
              Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
              placeat.
            </p>
            <button className="px-4 py-3 bg-primary text-white font-semibold">
              GET A QUOTE
            </button>
          </section>
          <section className="flex flex-col justify-center text-center items-center space-y-4 bg-blue-950 text-white p-4">
            <h3 className="flex items-center text-sm font-bold text-primary">
              <span className="w-10 h-0.5 inline-block bg-primary me-2"></span>
              MORE PACKAGES
            </h3>
            <h1 className="text-lg font-bold">
            OTHER TRAVEL PACKAGES
            </h1>
            <p className="text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.
            </p>
            <ul className="flex flex-col items-start gap-y-3 w-full [&>li]:border-b [&>li]:pb-2">
              <li className="flex gap-x-2 items-center w-full">
                <i className="far fa-arrow-alt-circle-right"></i>
                <span>Vacation packages</span>
              </li>
              <li className="flex gap-x-2 items-center w-full">
                <i className="far fa-arrow-alt-circle-right"></i>
                <span> Honeymoon packages</span>
              </li>
              <li className="flex gap-x-2 items-center w-full">
                <i className="far fa-arrow-alt-circle-right"></i>
                <span>New year packagess</span>
              </li>
              <li className="flex gap-x-2 items-center w-full">
                <i className="far fa-arrow-alt-circle-right"></i>
                <span>Weekend packages</span>
              </li>
            </ul>
            <button className="px-4 py-3 bg-primary text-white font-semibold">
              GET A QUOTE
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
