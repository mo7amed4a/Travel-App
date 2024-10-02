import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      // Handle form submission, e.g., call your API here
    },
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
            <label htmlFor="email" className="text-sm pb-1 text-gray-700">
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
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm pb-1 text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              className={`border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded p-2`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="w-full pt-2 flex justify-center">
            <button
              type="submit"
              className="py-3 px-4 bg-secondary w-full text-center text-white font-semibold hover:bg-secondary/90 duration-100"
            >
              Login
            </button>
          </div>
          <div className="flex justify-between w-full text-secondary">
            <Link to="/auth/sginup">You dont have an account?</Link>
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
