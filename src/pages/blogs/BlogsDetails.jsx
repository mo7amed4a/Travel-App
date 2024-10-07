import React, { useState } from "react";
import PaginationApp from "../../components/pagination";
import { Badge, Blockquote } from "flowbite-react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { blogContent } from "../../../public/data/blog";

export default function BlogDetailsPage() {
  return (
          <div className="md:col-span-4 p-4">
            wemfkefkwefklnwefklnwefknwefklnwefklnwefklnwefklwefnklwefnklwn
            {/* <figure className="w-full bg-blue-500">
              <a href="#">
                <img
                  className="w-full h-[50vh] md:h-[60vh]"
                  src="/images/img17.jpg"
                  alt=""
                />
              </a>
            </figure> */}
            <section className="space-y-4 mt-3">
              <div>
                <MarkdownEditor.Markdown className='ps-1 pe-4' source={blogContent} />
              </div>
              <div className="flex gap-3 mt-2 items-center">
                <span className="font-bold">Tags:</span>
                <Badge color={"blue"}>
                  jkc njnjo
                </Badge>
                <Badge>
                  jkc njnjo
                </Badge>
                <Badge>
                  jkc njnjo
                </Badge>
                <Badge>
                  jkc njnjo
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 [&>a]:w-full text-white my-4">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" className="flex bg-red-200">
                      <i className="bg-[#3b5998] px-2 py-3 fab fa-facebook-f w-8"></i>{" "}
                      <span className="bg-[#3b5998]/95 p-2 w-full flex items-center">
                        Facebook
                      </span>
                    </a>
                    {/* TODO: images Pinterest */}
                    <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=IMAGE_URL&description=View blog`} target="_blank" className="flex">
                      <i className="bg-[#bd081c] px-2 py-3 fab fa-pinterest"></i>{" "}
                      <span className="bg-[#bd081c]/95 p-2 w-full flex items-center">
                        Pinterest
                      </span>
                    </a>
                    <a href={`https://api.whatsapp.com/send?text=View%20blogout!%20${window.location.href}`} target="_blank" className="flex">
                      <i className="bg-[#25d366] px-2 py-3 fab fa-whatsapp w-8"></i>{" "}
                      <span className="bg-[#25d366]/95 p-2 w-full flex items-center">
                        WhatsApp
                      </span>
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" className="flex">
                      <i className="bg-[#0077b5] px-2 py-3 fab fa-linkedin w-8"></i>{" "}
                      <span className="bg-[#0077b5]/95 p-2 w-full flex items-center">
                        Linkedin
                      </span>
                    </a>
                    <a href={`https://twitter.com/share?url=${window.location.href}&via=travel_app&text=View blog`} target="_blank" className="flex">
                      <i className="bg-[#1da1f2] px-2 py-3 fab fa-twitter w-8"></i>
                      <span className="bg-[#1da1f2]/95 p-2 w-full flex items-centerl">
                        Twitter
                      </span>
                    </a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to&su=Travel&body=View%20blog%20link:%20${window.location.href}`} target="_blank" className="flex">
                      <i className="bg-[#dd4b39] p-2 fab fa-google w-8 flex items-center"></i>
                      <span className="bg-[#dd4b39]/95 p-2 w-full flex items-center">
                        Google
                      </span>
                    </a>
                  </div>
            </section>
          </div>
         

  );
}