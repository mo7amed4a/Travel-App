import React, { useContext } from "react";
import { UserContext } from "../../../Context/Usercontext";

export default function Profile() {
    const { Userdata } = useContext(UserContext); // Access the user data from context

    if (!Userdata) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70" 
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNreXxlbnwwfHx8fDE2MzEyMzQwNjA&ixlib=rb-1.2.1&q=80&w=1080')` }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>

            {/* Profile Card */}
            <div className="relative z-10 max-w-md p-8 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="flex flex-col items-center">
                    {/* Profile Photo */}
                    <img 
                        src={Userdata.profilePhoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} 
                        alt={`${Userdata.firstName} ${Userdata.lastName}`} 
                        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
                    />

                    {/* User Info */}
                    <h2 className="text-3xl font-bold text-white mb-1">{Userdata.firstName} {Userdata.lastName}</h2>
                    <p className="text-xl text-gray-300 mb-4">{Userdata.email}</p>

                    {/* Additional Details */}
                    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Phone:</span> {Userdata.phone}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Mobile:</span> {Userdata.mobile}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">City:</span> {Userdata.city}</p>
                        <p className="text-gray-700"><span className="font-semibold">Country:</span> {Userdata.country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
