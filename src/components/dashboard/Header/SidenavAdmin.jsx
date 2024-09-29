import { Sidebar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SidenavAdmin({ asideToggle, setAsideToggle }) {
  return (
    <>
      {asideToggle && (
        <div
          className="bg-black bg-opacity-45 fixed inset-0 lg:hidden"
          onClick={() => setAsideToggle((e) => !e)}
        ></div>
      )}
      <aside
        className={`bg-[#292929] text-white shadow-md w-80 h-screen fixed left-0 top-0 lg:relative lg:-translate-x-0 duration-200 ${
          asideToggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          className="w-full [&>div]:bg-[#292929]"
          aria-label="Sidebar with multi-level dropdown example"
        >
          <Sidebar.Items className="w-[100%]">
            <Sidebar.ItemGroup className="[&>*>*>*]:text-white  [&>*>*>*>*]:text-white w-full">
              <Sidebar.Item href="#" className="side-link hover:bg-gray-300/20">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse
                label="E-commerce"
                className="side-link hover:bg-gray-300/20"
              >
                <Sidebar.Item
                  href="#"
                  className="side-link hover:bg-gray-300/20"
                >
                  Products
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="side-link hover:bg-gray-300/20"
                >
                  Sales
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="side-link hover:bg-gray-300/20"
                >
                  Refunds
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  className="side-link hover:bg-gray-300/20"
                >
                  Shipping
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" className="side-link hover:bg-gray-300/20">
                Inbox
              </Sidebar.Item>
  <Sidebar.Item as={Link} to="/admin/users" className="side-link hover:bg-gray-300/20">
    Users
  </Sidebar.Item>

           
              <Sidebar.Item href="#" className="side-link hover:bg-gray-300/20">
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" className="side-link hover:bg-gray-300/20">
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" className="side-link hover:bg-gray-300/20">
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </aside>
    </>
  );
}
