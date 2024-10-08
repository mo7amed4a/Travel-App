import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Axios, baseURL } from '../../lib/api/Axios';
import toast from 'react-hot-toast';

export default function OtpPage() {
  let navigate = useNavigate();

  const validationSchema = Yup.object({
    otp: Yup.number().required('Otp is required'),
  });

  async function Otp(values) {
    try {
      const payload = { otp: parseInt(values.otp, 10) };
      const response = await Axios.post(`/auth/verify-otp`, payload);
      if (response.data.message === "success") {
        navigate("/auth/reset-password");
        toast.success(response?.data?.message);
      } else {
        console.error('OTP verification failed:', response.data.message);
      }
    } catch (error) {
      const err = ('Error during OTP verification:', error?.response?.data?.message || error?.message);
      toast.error(err);
    }
  }

  // Formik setup
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema,
    onSubmit: Otp,
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

          {/* OTP Field */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="otp" className="text-sm pb-1 text-gray-700">One-Time Password</label>
              <input
                id="otp"
                name="otp"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.otp}
                className={`border rounded p-2 ${formik.errors.otp && formik.touched.otp ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.otp && formik.errors.otp ? (
                <div className="text-red-500 text-sm">{formik.errors.otp}</div>
              ) : null}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center py-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send OTP
            </button>
          </div>

          {/* Login Redirect */}
          <p className="text-center text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
