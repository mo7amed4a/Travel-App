import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Axios, baseURL } from '../../components/Api/Axios';
export default function SignUpPage() {
let navigate=useNavigate()

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    mobile: Yup.string().required('Mobile number is required'),
    phone: Yup.string().required('Phone number is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref('email'), null], 'Emails must match')
      .required('Confirm Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      phone: '',
      city: '',
      country: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
        try {
          const response = await Axios.post(`${baseURL}/auth/register`, values);
          console.log(response.data);
      
        
          if (response.data.status === "SUCCESS") {
            navigate("/auth/login");
          } else {
       
            console.error('Registration failed:', response.data.message || 'Unknown error');
          }
        } catch (error) {
          console.error('Error during registration:', error.response ? error.response.data : error);
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

          {/* First Name and Last Name */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className='text-sm pb-1 text-gray-700'>First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={`border rounded p-2 ${formik.errors.firstName && formik.touched.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className='text-sm pb-1 text-gray-700'>Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className={`border rounded p-2 ${formik.errors.lastName && formik.touched.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          {/* Mobile and Phone */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="mobile" className='text-sm pb-1 text-gray-700'>Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                className={`border rounded p-2 ${formik.errors.mobile && formik.touched.mobile ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
              ) : null}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="phone" className='text-sm pb-1 text-gray-700'>Phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={`border rounded p-2 ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>
          </div>

          {/* City and Country */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-full">
              <label htmlFor="city" className='text-sm pb-1 text-gray-700'>City</label>
              <input
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
                className={`border rounded p-2 ${formik.errors.city && formik.touched.city ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-500 text-sm">{formik.errors.city}</div>
              ) : null}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="country" className='text-sm pb-1 text-gray-700'>Country</label>
              <input
                id="country"
                name="country"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.country}
                className={`border rounded p-2 ${formik.errors.country && formik.touched.country ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className="text-red-500 text-sm">{formik.errors.country}</div>
              ) : null}
            </div>
          </div>

          {/* Email and Confirm Email */}
          <div className="flex space-x-4">
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

            <div className="flex flex-col w-full">
              <label htmlFor="confirmEmail" className='text-sm pb-1 text-gray-700'>Confirm Email</label>
              <input
                id="confirmEmail"
                name="confirmEmail"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.confirmEmail}
                className={`border rounded p-2 ${formik.errors.confirmEmail && formik.touched.confirmEmail ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
                <div className="text-red-500 text-sm">{formik.errors.confirmEmail}</div>
              ) : null}
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="flex space-x-4">
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
          </div>

          <div className="flex justify-center py-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign Up
            </button>
          </div>
          <p className="text-center text-sm">
            Already have an account? <Link to="/auth/login" className="text-blue-500">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
