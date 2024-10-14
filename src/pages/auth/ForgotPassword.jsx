import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {  useNavigate } from 'react-router-dom';
import { Axios } from "../../lib/api/Axios";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  let navigate= useNavigate()
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  async function forgetpassword(values) {
    try {
      const response = await Axios.post(`/auth/forget-password`, values);
      if (response.data.status === "success") {
        navigate("/auth/otp");
      }
      toast.success(response?.data?.message);
    } catch (error) {
      const err = (error?.response?.data?.message || error?.message);
      toast.error(err);
    }
  }





  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: forgetpassword
  });

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{ backgroundImage: "url(/images/admin/bg.jpg)" }}
    >
      <div className="shadow-2xl rounded bg-white p-4 w-full mx-4 md:w-3/4 lg:w-2/4 xl:w-1/4">
        <form
          className="flex flex-col space-y-5"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="flex justify-center py-5">
            <a href="#">
              <img src="/images/admin/logo.png" alt="" />
            </a>
          </h1>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm pb-1 text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              {...formik.getFieldProps("email")}
              className={`border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded p-2`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="w-full pt-2 flex justify-center">
            <button
              type="submit"
              className="py-3 px-4 bg-secondary w-full text-center text-white font-semibold hover:bg-secondary/90 duration-100"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-between w-full text-secondary">
            <Link to={"/auth/login"}>Do you want to login?</Link>
            <Link to="/auth/signup">You don't have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
