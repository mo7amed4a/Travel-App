import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogsPage from "./blogs";
import BlogDetailsPage from "./BlogsDetails";

export default function BLogsLayout() {
  return (
    <section className="-mt-44 md:-mt-36">
      <div
        className="bg-[#555555] h-[50vh] object-cover bg-no-repeat bg-bottom flex justify-center items-center text-white font-bold"
        style={{
          backgroundImage:
            "url(http://192.168.1.2:3000/assets/images/slider-pattern.png)",
        }}
      >
        <h1 className="text-5xl">Archive</h1>
      </div>

      <div className="container-app py-10 grid grid-cols-1 xl:grid-cols-6">
        <Routes>
          <Route path="/" element={<BlogsPage />} />
          <Route path=":id" element={<BlogDetailsPage />} />
        </Routes>

        <div className="md:col-span-2">
          <div className="w-full px-7">
            <div className="">
              <aside className="">
                <h3 className="text-lg text-center font-semibold mb-4 px-1 border-2 border-secondary text-secondary">
                  ABOUT AUTHOR
                </h3>
                <div className="widget-content text-center">
                  <div className="profile">
                    <figure className="avatar mb-4">
                      <a href="#">
                        <img
                          src="http://192.168.1.2:3000/assets/images/img21.jpg"
                          alt=""
                          className="rounded-full w-32 h-32 mx-auto"
                        />
                      </a>
                    </figure>
                    <div className="">
                      <div className="name-title mb-4">
                        <h3 className="text-2xl font-bold">
                          <a
                            href="https://demo.bosathemes.com/bosa/photography/james-watson/"
                            className="text-gray-800 hover:text-gray-600"
                          >
                            James Watson
                          </a>
                        </h3>
                      </div>
                      <p className="text-secondary">
                        Accumsan? Aliquet nobis doloremque, aliqua? Inceptos
                        voluptatem, duis tempore optio quae animi viverra
                        distinctio cumque vivamus, earum congue, anim velit
                      </p>
                    </div>
                    <div className="mt-4">
                      <ul className="flex justify-center gap-x-4">
                        <li>
                          <a
                            target="_blank"
                            href="#"
                            className="text-gray-500 hover:text-secondary"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="#"
                            className="text-gray-500 hover:text-secondary"
                          >
                            <i className="fab fa-google"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="#"
                            className="text-gray-500 hover:text-secondary"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="#"
                            className="text-gray-500 hover:text-secondary"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="#"
                            className="text-gray-500 hover:text-secondary"
                          >
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="widget widget_latest_post widget-post-thumb mt-8">
                <h3 className="widget-title text-xl font-semibold mb-4">
                  Recent Post
                </h3>
                <ul className="flex flex-col gap-y-2 divide-y-2">
                  {[0, 1, 2].map((post, index) => (
                    <li className="flex gap-x-2 h-20 pt-2" key={index}>
                      <figure className="">
                        <a href="#">
                          <img
                            src="http://192.168.1.2:3000/assets/images/img17.jpg"
                            alt=""
                            className="rounded-lg w-32 h-full"
                          />
                        </a>
                      </figure>
                      <div className="flex flex-col justify-around w-full">
                        <h5 className="">
                          <a
                            href="#"
                            className="text-gray-800 hover:text-secondary"
                          >
                            Someday I’m going to be free and travel {post}
                          </a>
                        </h5>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span className="posted-on">
                            <a href="#" className="hover:text-secondary">
                              August 17, 2021
                            </a>
                          </span>
                          <span className="comments-link ml-2">
                            <a href="#" className="hover:text-secondary">
                              No Comments
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
              <aside className="widget widget_social mt-8">
                <h3 className="widget-title text-xl font-semibold mb-4">
                  Social share
                </h3>
                <div className="grid grid-cols-2 gap-4 [&>a]:w-full text-white my-4">
                  <a href="#" className="flex bg-red-200">
                    <i className="bg-[#3b5998] px-2 py-3 fab fa-facebook-f w-8"></i>{" "}
                    <span className="bg-[#3b5998]/95 p-2 w-full flex items-center">
                      Facebook
                    </span>
                  </a>
                  <a href="#" className="flex">
                    <i className="bg-[#bd081c] px-2 py-3 fab fa-pinterest"></i>{" "}
                    <span className="bg-[#bd081c]/95 p-2 w-full flex items-center">
                      Pinterest
                    </span>
                  </a>
                  <a href="#" className="flex">
                    <i className="bg-[#25d366] px-2 py-3 fab fa-whatsapp w-8"></i>{" "}
                    <span className="bg-[#25d366]/95 p-2 w-full flex items-center">
                      WhatsApp
                    </span>
                  </a>
                  <a href="#" className="flex">
                    <i className="bg-[#0077b5] px-2 py-3 fab fa-linkedin w-8"></i>{" "}
                    <span className="bg-[#0077b5]/95 p-2 w-full flex items-center">
                      Linkedin
                    </span>
                  </a>
                  <a href="#" className="flex">
                    <i className="bg-[#1da1f2] px-2 py-3 fab fa-twitter w-8"></i>
                    <span className="bg-[#1da1f2]/95 p-2 w-full flex items-centerl">
                      Twitter
                    </span>
                  </a>
                  <a href="#" className="flex">
                    <i className="bg-[#dd4b39] p-2 fab fa-google w-8 flex items-center"></i>
                    <span className="bg-[#dd4b39]/95 p-2 w-full flex items-center">
                      Google
                    </span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
