import { Accordion, Card } from "flowbite-react";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Axios } from "../../lib/api/Axios";
import PaginationApp from "../../components/pagination";
import toast from "react-hot-toast";

export default function FaqPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetch(
    `/faq/answer?page=${currentPage}&limit=10`
  );

  const faqs = data?.data?.faqs;
  

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    question: Yup.string().required("Question is required"),
  });

  const formik = useFormik({
    
    initialValues: {
      name: "",
      email: "",
      phone: "",
      question: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await Axios.post(`/faq`, {
          name: values.name,
          email: values.email,
          phone: values.phone.toString(),
          question: values.question,
        });
        toast.success(res?.data?.message);
      }
      catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });

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
            <h1 className="text-xl md:text-4xl font-bold">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-gray-800 text-sm">
              Mollit voluptatem perspiciatis convallis elementum corporis quo
              veritatis aliquid blandit, blandit torquent, odit placeat.
              Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae
              placeat.
            </p>
          </section>
          <section>
            <Accordion>
              {faqs &&
                faqs.map((faq) => (
                  <Accordion.Panel key={faq._id}>
                    <Accordion.Title>{faq.question}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
            </Accordion>
          </section>
          <div className="flex justify-center">
            <PaginationApp
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={data?.totalPages}
            />
          </div>
        </div>
        <div className="w-full h-auto md:col-span-2">
          <div className="p-8 bg-secondary text-white text-center space-y-5">
            <h1 className="text-xl font-semibold">STILL HAVE A QUESTION?</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              magni ad aspernatur illo doloremque molestiae iste recusandae nam
              libero quaerat!
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col space-y-5 py-2 [&>div>input]:text-black [&>div>textarea]:text-black"
            >
              <div className="text-start">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className={`w-full ${formik.errors.name && formik.touched.name && 'border border-red-500'}`}
              
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm pt-1">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="text-start">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={`w-full ${formik.errors.email && formik.touched.email && 'border border-red-500'}`}
              
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm pt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="text-start">
                <input
                  type="number"
                  name="phone"
                  placeholder="Your phone*"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  className={`w-full ${formik.errors.phone && formik.touched.phone && 'border border-red-500'}`}
              
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm pt-1">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="text-start">
                <textarea
                  name="question"
                  placeholder="Enter your question*"
                  onChange={formik.handleChange}
                  value={formik.values.question}
                  className={`w-full ${formik.errors.question && formik.touched.question && 'border border-red-500'}`}
              
                ></textarea>
                {formik.touched.question && formik.errors.question ? (
                  <div className="text-red-500 text-sm pt-1">
                    {formik.errors.question}
                  </div>
                ) : null}
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-primary text-white inline-block font-bold p-3 cursor-pointer"
                >SUBMIT QUESTIONS</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <section className="container-app w-full grid grid-cols-1 md:grid-cols-5 gap-10 my-20">
        <div className="w-full h-auto md:col-span-2">
          <div className="relative md:h-[30rem] text-white">
            <img src="/images/img27.jpg" className="h-full w-full" alt="" />
            <div className="bg-primary md:w-11/12 p-4 md:absolute -bottom-10 left-0">
              <i className="text-5xl fas fa-quote-left"></i>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo."
              </p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-10 md:col-span-3 mt-10 md:mt-0">
          <section className="flex flex-col justify-center items-start space-y-4 bg-gray-100 p-4">
            <h3 className="flex items-center text-sm font-bold text-primary">
              <span className="w-10 h-0.5 inline-block bg-primary me-2"></span>
              QUESTIONS/ANSWERS
            </h3>
            <h1 className="text-xl md:text-4xl font-bold">
              BENEFITS & WHAT WE DO?
            </h1>
          </section>
          <section>
            <Accordion>
              {faqs &&
                faqs.map((faq, index) => (
                  <Accordion.Panel key={index}>
                    <Accordion.Title>{faq.question}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
            </Accordion>
          </section>
        </div>
      </section> */}
    </div>
  );
}
