import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{backgroundImage: "url(/images/admin/bg.jpg)"}}>
        <div className="shadow-2xl rounded bg-white p-4 w-full mx-4 md:w-3/4 lg:w-2/4 xl:w-1/4">
            <form className="flex flex-col space-y-5">
                <h1 className="flex justify-center py-5">
                    <a href="#">
                        <img src="/images/admin/logo.png" alt="" />
                    </a>
                </h1>
                <div className="flex flex-col ">
                    <label for="first_name1" className='text-sm pb-1 text-gray-700'>User Nnnnname app</label>
                    <input id='first_name1' type="text" />
                </div>
                <div className="w-full pt-2 flex justify-center">
                    <a className="py-3 px-4 bg-secondary w-full text-center  text-white font-semibold hover:bg-secondary/90 duration-100" href="dashboard.html">Submit</a>
                </div>
                <div className='flex justify-end w-full text-secondary'>
                    <Link to="/admin/login">Do you have account?</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
