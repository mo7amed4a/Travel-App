import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context/Usercontext";

export default function NavbarAdmin({ setAsideToggle }) {
  const { Userdata, setAuthorization, setUserdata } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Userdata");
    localStorage.removeItem("Authorization");
    setUserdata(null);
    setAuthorization(null);
    navigate("/auth/login");
  };
  return Userdata && (
    <Navbar fluid rounded className="py-0">
      <Navbar.Brand as={Link} to="/" className="py-2">
        <img
          src="/images/logoapp.png"
          className="mr-3 h-6 sm:h-9"
          alt="Travil app"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <div>
          <button className="block md:hidden  hover:text-secondary/90 py-2 px-4 hover:bg-gray-300/50 h-full">
            <i className="fa fa-search text-2xl" aria-hidden="true"></i>
          </button>
          <input
            className="md:block hidden h-full border-2 m-0.5 px-2"
            placeholder="Search Now"
          />
        </div> */}
        <Dropdown
          arrowIcon={false}
          inline
          className="w-64"
          label={
            <div className="relative hover:text-secondary hover:bg-gray-300 py-2 px-4 rounded-none">
              <span className="absolute top-0.5 right-2 z-10 text-white bg-primary rounded-full px-1.5 text-[10px] font-bold py-0.5">
                3
              </span>
              <i className="far fa-envelope text-4xl" aria-hidden="true"></i>
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
              <i className="far fa-bell text-4xl" aria-hidden="true"></i>
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
              alt={`${Userdata?.firstName}`}
              className="hover:bg-gray-300 py-2 px-2 pe-0 rounded-none"
              img={Userdata.profilePhoto}
              rounded
            >
              <span className="font-bold hidden md:block">{`${Userdata?.firstName}`}</span>
            </Avatar>
          }
        >
          <Dropdown.Header>
          <span className="block text-sm truncate font-bold">{`${Userdata?.firstName} ${Userdata?.lastName}`}</span>
          <span className="block truncate text-sm font-medium">
              {Userdata?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/profile">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle
          className="px-3 rounded-none  block lg:hidden "
          onClick={() => setAsideToggle((e) => !e)}
        />
      </div>
    </Navbar>
  );
}
