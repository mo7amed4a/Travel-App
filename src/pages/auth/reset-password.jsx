import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Axios, baseURL } from '../../lib/api/Axios';
export default function ResetPasswordPage() {
  let navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await Axios.post(`/auth/reset-password`, {
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        console.log(response.data);

        if (response.data.status === "success") {
          navigate("/auth/login");
        } else {
          console.error('Password reset failed:', response.data.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error during password reset:', error.response ? error.response.data : error);
      }
    },
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "url(/images/admin/bg.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="shadow-lg rounded-lg bg-white p-6 w-full mx-4 md:w-3/4 lg:w-2/4 xl:w-1/3">
        <form className="flex flex-col space-y-5" onSubmit={formik.handleSubmit}>
          <h1 className="flex justify-center py-5">
            <a href="#">
              <img src="/images/admin/logo.png" alt="Logo" className="w-1/2" />
            </a>
          </h1>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className='text-sm pb-1 text-gray-700'>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`border rounded p-2 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password */}
          <div className="flex flex-col w-full">
            <label htmlFor="password" className='text-sm pb-1 text-gray-700'>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`border rounded p-2 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col w-full">
            <label htmlFor="confirmPassword" className='text-sm pb-1 text-gray-700'>Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className={`border rounded p-2 ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center py-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Reset Password
            </button>
          </div>

          <p className="text-center text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
