import {
  Avatar,
  Button,
  Dropdown,
  Label,
  MegaMenu,
  Modal,
  Navbar,
  TextInput,
} from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // استيراد useNavigate
import DropdownComponent from "./DropdownComponent";
import { UserContext } from "../components/Context/Usercontext";

export default function HeaderApp({ scrollPage }) {
  const { Userdata, setUserdata, setAuthorization } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate(); 

  const LintForDropdown = ({ title, to = "" }) => {
    return (
      <Navbar.Link
        as={Link}
        to={to === "" ? title : to}
        className={`cursor-pointer ${
          scrollPage ? "text-black" : "text-black md:text-white"
        }`}
      >
        {title}
      </Navbar.Link>
    );
  };

  const handleSearch = () => {
    if (searchText.length >= 1) {
      window.location.href = `/blogs?search=${searchText}`;
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("Userdata");
    localStorage.removeItem("Authorization");
    setUserdata(null);
    setAuthorization(null);
    navigate("/auth/login");
  };

  return (
    <div className="relative z-50">
      <MegaMenu
        className={`text-white p-0 ${
          scrollPage
            ? "fixed top-0 inset-x-0 bg-white z-50"
            : "relative md:bg-transparent"
        }`}
      >
        {!scrollPage && (
          <div className="container-app flex justify-between items-center text-gray-500 bg-white md:bg-transparent md:text-white">
            {/* Contact Information */}
            <ul className="flex gap-x-4 p-4">
              <li>
                <a href="#" className="flex gap-x-1 items-center">
                  <i className="fas fa-phone-alt"></i>
                  <span className="hidden md:block">01010101000</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-x-1 items-center">
                  <i className="fas fa-envelope"></i>
                  <span className="hidden md:block">3m tourism@3m.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex gap-x-1 items-center">
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="hidden md:block">32 nwe cairo</span>
                </a>
              </li>
            </ul>
            {/* Social Media Links and Search Modal */}
            <ul className="flex justify-end gap-x-4 px-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="border-s ps-2">
                <a
                  onClick={() => setOpenModal(!openModal)}
                  className="fa fa-search cursor-pointer"
                ></a>
              </li>
            </ul>
            <Modal
              dismissible
              show={openModal}
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header>Search</Modal.Header>
              <Modal.Body>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="search" value="Search" />
                  </div>
                  <TextInput
                    id="search"
                    type="search"
                    placeholder="Search.."
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                </div>
                {searchText}
              </Modal.Body>
              <Modal.Footer className="justify-end">
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
                <Button onClick={() => handleSearch()}>Search</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
        {/* Main Navbar */}
        <div
          className={`flex container-app flex-wrap items-center justify-between py-4 md:gap-x-8`}
        >
          <Navbar.Brand as={Link} to="/packages">
            <img alt="" src="/images/logoapp.png" className="mr-3 h-6 sm:h-9" />
          </Navbar.Brand>
          {/* <div className="flex md:order-1 items-center gap-x-2"> */}
            <div className="flex md:order-2 gap-x-2">
            <Button
              as={Link}
              to={"/packages"}
              className="bg-primary hover:bg-primary/90 focus:bg-primary/80 rounded-none"
            >
              BOOK NOW
            </Button>
              {Userdata && <Dropdown
                arrowIcon={false}
                inline
                className="w-44"
                label={
                  <Avatar
                    alt={Userdata.firstName}
                    img={Userdata.profilePhoto}
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm truncate font-bold">{`${Userdata.firstName} ${Userdata.lastName}`}</span>
                  <span className="block truncate text-xs font-medium">
                    {Userdata.email}
                  </span>
                </Dropdown.Header>
                {Userdata?.isAdmin && <Dropdown.Item as={Link} to={"/admin"}>Dashboard</Dropdown.Item>}
                <Dropdown.Item as={Link} to={"/profile"}>Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </Dropdown>}
              <Navbar.Toggle />
            </div>
          <Navbar.Collapse
            className={`[&>ul]:space-x-0 [&>ul]:gap-x-4 [&>*>*>*]:uppercase [&>*>*>*]:font-bold bg-white md:bg-transparent ${
              scrollPage
                ? "[&>*>*>*>a]:text-black [&>*>*>*]:text-black"
                : "[&>*>*>*>a]:text-black [&>*>*>*]:text-black md:[&>*>*>*>a]:text-white md:[&>*>*>*]:text-white"
            }`}
          >
            <Navbar.Link as={Link} to="/" href="#">
              Home
            </Navbar.Link>
            <DropdownComponent
              ButtonLink={<LintForDropdown title={"Packages"} />}
            >
              <ul className="text-black space-y-4">
                <Navbar.Link as={Link} to="/packages">
                  Packages
                </Navbar.Link>
                <Navbar.Link as={Link} to="/packages/1">
                  Packages Details
                </Navbar.Link>
              </ul>
            </DropdownComponent>
            <DropdownComponent ButtonLink={<LintForDropdown title={"Blogs"} />}>
              <ul className="text-black space-y-4">
                <Navbar.Link as={Link} to="/blogs">
                  Blogs
                </Navbar.Link>
                <Navbar.Link as={Link} to="/blogs/1">
                  Blogs Details
                </Navbar.Link>
              </ul>
            </DropdownComponent>
            
            <DropdownComponent
              ButtonLink={<LintForDropdown title={"more pages"} to="/" />}
            >
              <ul className="text-black space-y-4">
                <Navbar.Link as={Link} to="/faq">
                  Faq
                </Navbar.Link>
                <Navbar.Link as={Link} to="/not-found">
                  Not Found
                </Navbar.Link>
                <Navbar.Link as={Link} to="/auth/login">
                  Login
                </Navbar.Link>
                <Navbar.Link as={Link} to="/auth/signup">
                  Sign Up
                </Navbar.Link>{" "}
                {/* Corrected spelling */}
                <Navbar.Link as={Link} to="/auth/reset-password">
                  Reset Password
                </Navbar.Link>
                <Navbar.Link as={Link} to="/auth/otp">
                  OTP Page
                </Navbar.Link>
                <Navbar.Link as={Link} to="/auth/forgot-password">
                  Forgot Password
                </Navbar.Link>
              </ul>
            </DropdownComponent>
          </Navbar.Collapse>
        </div>
      </MegaMenu>
    </div>
  );
}
