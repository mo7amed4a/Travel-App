import { Helmet } from "react-helmet-async";
import { TabForPackageDetail } from "../../components/TabForPackageDetail";
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";
import { Label } from "flowbite-react";
import SubHeader from "../../components/Sub-Header";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import EmptyData from "../../components/global/empty";
import ErrorComponent from "../../components/global/Error";
import Loading from "../../components/global/Loading";
import SliderComponent from "../../components/SliderComponent";
import { Axios } from "../../lib/api/Axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { titleApp } from "../../constant/data";

export default function PackagesDetailsPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/package/${id}`);
  const item = data?.data?.package;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Full Name is required")
      .min(2, "Full Name must be at least 2 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().required("Number is required"),
    date: Yup.date()
      .required("Date is required")
      .nullable()
      .min(new Date(), "Date must be in the future"),
    message: Yup.string(),
    packageId: Yup.string().required("Package ID is required"),
    options: Yup.array()
      .of(Yup.string())
      .required("At least one option is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  });

  async function booking(values) {
    try {
      const res = await Axios.post(`/bookings`, values);
      toast.success("Booking successful");
    } catch (error) {
      console.error(
        "Error booking:",
        error.response ? error.response.data : error
      );
      toast.error(error?.response?.data?.message);
    }
  }

  const initialValues = {
    name: "",
    email: "",
    number: "",
    message: "",
    date: null,
    packageId: id,
    options: [],
    city: "",
    country: "",
  };

  return (
    <div className="space-y-10">
      <Helmet>
        <title>{item ? `${item.title} - Packages` : 'Loading...'} | {titleApp} </title>
        <meta name="description" content={item ? item.description : "Loading package details..."} />
        <meta name="keywords" content={item ? `${item.keyword} , ${item.location}, booking, packages` : "packages, booking"} />
      </Helmet>
      <SubHeader title="Package Details" />
      {loading && <Loading />}
      {data?.data?.package && !loading && !error ? (
        <section className="grid grid-cols-1 xl:grid-cols-6 container-app gap-5 pb-10">
          <section className="md:col-span-4 space-y-10">
            <article className="space-y-5">
              <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold me-4">
                {item.title}
              </h1>
              <figure className="w-full bg-blue-500 relative">
                {item.image.length > 0 ? (
                  <SliderComponent slides={item.image} />
                ) : <SliderComponent /> }
                <div className="absolute top-[93%] inset-x-0 z-10 py-3 bg-secondary text-white text-sm flex justify-center items-center">
                  <ul className="flex justify-between [&>li>i]:pe-2 [&>li]:ps-4 divide-x gap-x-4">
                    <li>
                      <i className="far fa-clock"></i>
                      <span>{item.duration.day} days</span> /
                      <span> {item.duration.nights} night</span>
                    </li>
                    <li>
                      <i className="fas fa-user-friends"></i>
                      People: 5
                    </li>
                    <li>
                      <i className="fas fa-map-marked-alt"></i>
                      {item.location}
                    </li>
                  </ul>
                </div>
              </figure>
            </article>
            <TabForPackageDetail packageData={item} />
          </section>
          <div className="md:col-span-2 space-y-10">
            <div className="bg-primary py-5 flex flex-col justify-center items-center space-y-3 text-white">
              <h3>
                <span className="text-2xl font-bold">$50</span> / per person
              </h3>
              <span className="flex text-xl items-center">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStarBorder />
              </span>
            </div>

            <div className="bg-gray-100 p-4 space-y-4">
              <div className="bg-secondary text-center p-5 text-white text-xl font-semibold">
                Booking
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={booking}
              >
                {({ setFieldValue, values }) => (
                  <Form className="space-y-4">
                    <div>
                      <Field
                        type="text"
                        name="name"
                        className="w-full p-2 border-gray-300"
                        placeholder="Full Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        type="email"
                        name="email"
                        className="w-full p-2 border-gray-300"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="number"
                        className="w-full p-2 border-gray-300"
                        placeholder="Number"
                      />
                      <ErrorMessage
                        name="number"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="city"
                        className="w-full p-2 border-gray-300"
                        placeholder="City"
                      />
                      <ErrorMessage
                        name="city"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="country"
                        className="w-full p-2 border-gray-300"
                        placeholder="country"
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        type="date"
                        name="date"
                        className="w-full p-2 border-gray-300"
                      />
                      <ErrorMessage
                        name="date"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div>
                      <Field
                        as="textarea"
                        name="message"
                        className="w-full p-2 border-gray-300"
                        placeholder="Enter your message"
                      />
                    </div>
                    <p>Add Options</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="options"
                          value="tour guide"
                          onChange={() => {
                            const newValue = values.options.includes(
                              "tour guide"
                            )
                              ? values.options.filter(
                                  (option) => option !== "tour guide"
                                )
                              : [...values.options, "tour guide"];
                            setFieldValue("options", newValue);
                          }}
                        />
                        <Label htmlFor="tourguide" className="flex">
                          Tour guide
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="options"
                          value="dinner"
                          onChange={() => {
                            const newValue = values.options.includes("dinner")
                              ? values.options.filter(
                                  (option) => option !== "dinner"
                                )
                              : [...values.options, "dinner"];
                            setFieldValue("options", newValue);
                          }}
                        />
                        <Label htmlFor="dinner" className="flex">
                          dinner
                        </Label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded"
                    >
                      Book Now
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      ) : (
        error && <ErrorComponent error={error} />
      )}
      {data?.data?.package === null && !loading && !error && (
        <EmptyData text="Package not found" />
      )}
    </div>
  );
}
