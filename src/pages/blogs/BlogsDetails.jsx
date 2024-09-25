import React, { useState } from "react";
import PaginationApp from "../../components/pagination";
import { Badge, Blockquote } from "flowbite-react";

export default function BlogDetailsPage() {
  return (
          <div className="md:col-span-4 p-4">
            <figure className="w-full bg-blue-500">
              <a href="#">
                <img
                  className="w-full h-[50vh] md:h-[60vh]"
                  src="/images/img17.jpg"
                  alt=""
                />
              </a>
            </figure>
            <section className="space-y-4 mt-3">
              <h1 className="text-xl font-semibold">Cupiditate hic provident, repudiandae delectus debitis hac alias curabitur, sequi minim sapien scelerisque dolorem id.</h1>
              <div className="body space-y-2 text-sm [&>p]:leading-relaxed">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates vel, dolor velit dolores nostrum, ut similique perspiciatis mollitia totam, omnis laudantium sed molestias reprehenderit quisquam rerum ea ratione quaerat excepturi error. Suscipit incidunt qui reiciendis quaerat necessitatibus sequi inventore ipsa facere minus ipsum libero eum voluptatibus, quos quam veniam quia ipsam? Beatae, atque quis, quaerat adipisci consectetur ipsam incidunt officia cupiditate sunt eum omnis quisquam earum ratione culpa accusantium iste. Neque voluptate quos unde blanditiis sunt. Repudiandae totam libero veritatis temporibus reiciendis, eaque illum facere dolores dolorum vitae mollitia! A, magni sit. At reprehenderit recusandae delectus? Rem id accusamus magni in voluptas soluta, esse, magnam veritatis ad numquam explicabo provident mollitia, doloribus maiores sit architecto corrupti rerum harum odit vitae est eius dolorum. Sit sapiente incidunt aspernatur ratione distinctio sed cumque? Deleniti, porro odio veniam maxime voluptatum illum? Cupiditate, illo est voluptas quisquam eligendi accusantium repudiandae soluta, rem reiciendis ab enim sed? Consequuntur provident ipsum laudantium optio consequatur totam earum cupiditate. Corporis quos consectetur iure ad, in iusto ipsum temporibus quae mollitia perspiciatis eius praesentium provident consequuntur, nam aperiam commodi fugit animi ratione. Magnam, culpa deserunt autem perferendis quibusdam ullam excepturi explicabo magni reprehenderit. Natus harum sed dolorem modi.</p>
                <Blockquote >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem maiores nisi consequuntur illo qui ut magni reiciendis est ea quia, dolor exercitationem maxime necessitatibus ab ducimus nulla, iusto consequatur.</Blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti earum non perferendis sunt officiis voluptates cupiditate voluptatibus aut itaque fugit, ullam veritatis ab ipsa eligendi error quo officia expedita temporibus dignissimos voluptatem assumenda maiores iste maxime. Nesciunt accusantium omnis enim rerum nemo cum ducimus nisi consequatur molestiae ex, sit nulla aliquam vel excepturi doloribus natus atque quasi commodi, quo quaerat distinctio ratione! Ipsam, modi? Molestias eligendi facere animi autem incidunt, atque praesentium dolorem aliquid quibusdam, aperiam facilis voluptates quae. Hic obcaecati nobis possimus, molestias sapiente assumenda consectetur veritatis magnam. Rem harum impedit qui aut. Et ipsa quod aliquam commodi aut.</p>
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
            </section>
          </div>
         

  );
}