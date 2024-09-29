import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarAdmin({ setAsideToggle }) {

  return (
    <Navbar fluid rounded className="py-0">
      <Navbar.Brand as={Link} to="/" className="py-2">
        <img
          src="/images/admin/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Travil app"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div>
          <button className="block md:hidden  hover:text-secondary/90 py-2 px-4 hover:bg-gray-300/50 h-full">
            <i class="fa fa-search text-2xl" aria-hidden="true"></i>
          </button>
          <input
            className="md:block hidden h-full border-2 m-0.5 px-2"
            placeholder="Search Now"
          />
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          className="w-64"
          label={
            <div className="relative hover:text-secondary hover:bg-gray-300 py-2 px-4 rounded-none">
              <span className="absolute top-0.5 right-2 z-10 text-white bg-primary rounded-full px-1.5 text-[10px] font-bold py-0.5">
                3
              </span>
              <i class="far fa-envelope text-4xl" aria-hidden="true"></i>
            </div>
          }
        >
          <Dropdown.Header className="text-center border-t-4 border-t-secondary">
            <span className="block text-sm font-semibold">3 Messages</span>
          </Dropdown.Header>
          {[0, 3, 5].map((item, index) => (
            <Dropdown.Item key={index} className="flex justify-start">
              <Avatar
                alt="Message"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              >
                <div className="flex flex-col items-start">
                  <span>My Account</span>
                  <span className="text-xs">message {item}</span>
                </div>
              </Avatar>
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Dropdown
          arrowIcon={false}
          inline
          className="w-64"
          label={
            <div className="relative hover:text-secondary hover:bg-gray-300 py-2 px-4 rounded-none">
              <span className="absolute top-0.5 right-2 z-10 text-white bg-primary rounded-full px-1.5 text-[10px] font-bold py-0.5">
                3
              </span>
              <i class="far fa-bell text-4xl" aria-hidden="true"></i>
            </div>
          }
        >
          <Dropdown.Header className="text-center border-t-4 border-t-secondary">
            <span className="block text-sm font-semibold">3 Notifications</span>
          </Dropdown.Header>
          {[0, 3, 5].map((item, index) => (
            <Dropdown.Item key={index} className="flex justify-start">
              <Avatar
                alt="Message"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              >
                <div className="flex flex-col items-start">
                  <span>Notification</span>
                  <span className="text-xs">Notification {item}</span>
                </div>
              </Avatar>
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              className="hover:bg-gray-300 py-2 px-2 pe-0 rounded-none"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            >
              <span className="font-bold hidden md:block">My Account</span>
            </Avatar>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-semibold">Ali</span>
            <span className="block truncate text-sm font-medium">
              email@mail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle
          className="px-3 rounded-none  block lg:hidden "
          onClick={() => setAsideToggle((e) => !e)}
        />
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
