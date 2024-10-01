import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
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
                    <label for="first_name1" className='text-sm pb-1 text-gray-700'>User Name</label>
                    <input id='first_name1' type="text" />
                </div>
                <div className="flex flex-col ">
                    <label for="last_name" className='text-sm pb-1 text-gray-700'>Password</label>
                    <input id="last_name" type="password"/>
                </div>
                <div className="w-full pt-2 flex justify-center">
                    <button type='submit' className="py-3 px-4 bg-secondary w-full text-center text-white font-semibold hover:bg-secondary/90 duration-100">Login</button>
                </div>
                <div className='flex justify-between w-full text-secondary'>
                    <Link to="/auth/sginup">You dont have an account?</Link>
                    <Link to="/auth/forgot-password">Forgot Password?</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
