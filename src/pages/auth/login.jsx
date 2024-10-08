import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from "../../components/Context/Usercontext";
import { Axios, baseURL } from '../../lib/api/Axios';
import toast from 'react-hot-toast';

export default function LoginPage() {
  let { setAuthorization, setUserdata } = useContext(UserContext);
  let navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  async function login(values) {
    try {
      const response = await Axios.post(`/auth/login`, values);
      if (response.data.status === "SUCCESS") {
        localStorage.setItem("Userdata", JSON.stringify(response.data.data.user));
        localStorage.setItem("Authorization", response.data.token);
        setUserdata(response.data.data.user);
        setAuthorization(response.data.token);
        navigate("/");
        toast.success("Login successful");
      } else {
        setErrorMessage(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      const errorMsg = error.response ? error.response.data.message : "An unexpected error occurred.";
      toast.error(errorMsg);
      setErrorMessage(errorMsg);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: login,
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
              <img src="/images/admin/logo.png" alt="Logo" />
            </a>
          </h1>

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}

          <div className="flex flex-col">
            <label htmlFor="email" className='text-sm pb-1 text-gray-700'>Email</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className={`border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm pb-1 text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              className={`border ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"} rounded p-2`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
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

          <div className='flex justify-between w-full text-secondary'>
            <Link to="/auth/signup">You don't have an account?</Link>
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
