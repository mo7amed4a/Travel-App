import { Accordion, Card } from "flowbite-react";
import React from "react";

export default function FaqPage() {
  return (
    <div className="-mt-36">
      <div
        className="bg-[#555555] h-[50vh] object-cover bg-no-repeat bg-bottom flex justify-center items-center text-white font-bold"
        style={{
          backgroundImage: "url(/images/slider-pattern.png)",
        }}
      >
        <h1 className="text-5xl">Faq</h1>
      </div>
      <section className="container-app w-full grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="w-full space-y-10 md:col-span-3">
          <section className="flex flex-col justify-center items-start space-y-4 bg-gray-100 p-4">
            <h3 className="flex items-center text-sm font-bold text-primary">
              <span className="w-10 h-0.5 inline-block bg-primary me-2"></span>
              ANY QUESTIONS
            </h3>
            <h1 className="text-xl md:text-4xl font-bold">FREQUENTLY ASKED QUESTIONS</h1>
            <p className="text-gray-800 text-sm">
              Mollit voluptatem perspiciatis convallis elementum corporis quo
              veritatis aliquid blandit, blandit torquent, odit placeat.
              Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
              placeat.
            </p>
          </section>
          <section>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>What is this?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti exercitationem assumenda voluptas voluptatibus,
                    repellendus porro error ratione quia in quidem pariatur
                    neque sunt vero ipsa voluptatum incidunt! Doloribus, nostrum
                    veniam.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </section>
        </div>
        <div className="w-full h-auto md:col-span-2">
          <div className="p-8 bg-secondary text-white text-center space-y-5">
            <h1 className="text-xl font-semibold">STILL HAVE A QUESTION?</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              magni ad aspernatur illo doloremque molestiae iste recusandae nam
              libero quaerat!
            </p>

            <form className="flex flex-col space-y-5 py-2">
              <input type="text" name="name" placeholder="Your Name*" />
              <input type="email" name="email" placeholder="Your Email*" />
              <input type="number" name="number" placeholder="Your Number*" />
              <textarea placeholder="Enter your message"></textarea>
              <div className="flex justify-start">
              <input
                type="submit"
                className="bg-primary text-white inline-block p-3 cursor-pointer"
                name="submit"
                value="SUBMIT QUESTIONS"
              />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="container-app w-full grid grid-cols-1 md:grid-cols-5 gap-10 my-20">
        <div className="w-full h-auto md:col-span-2">
          <div className="relative md:h-[30rem] text-white">
            <img src="/images/img27.jpg" className="h-full w-full" alt="" />
            <div className="bg-primary md:w-11/12 p-4 md:absolute -bottom-10 left-0">
              <i className="text-5xl fas fa-quote-left"></i>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-10 md:col-span-3 mt-10 md:mt-0">
          <section className="flex flex-col justify-center items-start space-y-4 bg-gray-100 p-4">
            <h3 className="flex items-center text-sm font-bold text-primary">
              <span className="w-10 h-0.5 inline-block bg-primary me-2"></span>
              QUESTIONS/ANSWERS
            </h3>
            <h1 className="text-xl md:text-4xl font-bold">BENEFITS & WHAT WE DO?</h1>
          </section>
          <section>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>What is this?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti exercitationem assumenda voluptas voluptatibus,
                    repellendus porro error ratione quia in quidem pariatur
                    neque sunt vero ipsa voluptatum incidunt! Doloribus, nostrum
                    veniam.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </section>
        </div>
      </section>
    </div>
  );
}
