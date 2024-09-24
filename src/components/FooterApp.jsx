import { Button, Footer, Label, TextInput } from "flowbite-react";

export default function FooterApp() {
  return (
    <Footer bgDark container>
      <div className="w-full text-center container-app">
        <div className="w-full justify-between sm:flex items-start sm:justify-between space-y-10 md:space-y-0">
          <div className="text-white text-start space-y-4 w-full">
            <h1 className="font-bold border-s-4 border-s-secondary ps-2">
              About Travel
            </h1>
            <p className="w-5/6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="text-white text-start space-y-4 w-full">
            <h1 className="font-bold border-s-4 border-s-secondary ps-2">
              CONTACT INFORMATION
            </h1>
            <p className="w-5/6 text-sm">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex gap-x-2 items-center">
                  <i className="fas fa-phone-alt text-primary"></i>
                  +01 (977) 2599 12
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-x-2 items-center">
                  <i className="fas fa-envelope text-primary"></i>
                  company@domain.com
                </a>
              </li>
              <li className="flex gap-x-2 items-center">
                <i className="fas fa-map-marker-alt text-primary"></i>
                3146 Koontz, California
              </li>
            </ul>
          </div>
          <div className="text-white text-start space-y-4 w-full">
            <h1 className="font-bold border-s-4 border-s-secondary ps-2">
              Latest Post
            </h1>
            <p className="w-5/6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            </p>
            <div className="space-y-4">
              {[1, 2].map((item, index) => (
                <a href="#" key={index}>
                  <h1 className="text-sm font-semibold line-clamp-1">
                    {item} Life is a beautiful journey not a destination
                  </h1>
                  <p className="text-xs text-gray-400 flex gap-x-2 divide-x-2 divide-gray-600">
                    <span>August 17, 2021</span>{" "}
                    <span className="ps-2">No Comments</span>
                  </p>
                </a>
              ))}
            </div>
          </div>
          {/* <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          /> */}
          <div className="text-white text-start space-y-4 w-full">
            <h1 className="font-bold border-s-4 border-s-secondary ps-2">
              SUBSCRIBE US
            </h1>
            <p className="w-5/6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            </p>
            <form className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4" className="text-white" value="Your email" />
              </div>
              <input 
                id="email4"
                type="email"
                // rightIcon={HiMail}
                placeholder="Email.."
                className="rounded-none w-full text-black"
                required
              />
              <button className="rounded-none bg-primary hover:bg-primary/95 w-full py-3 mt-4">SUBSCRIBE NOW</button>
            </form>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="https://webbing-agency.com/"
          by="Webbing Agency"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
}
