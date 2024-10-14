import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Context/Usercontext';



function ProtectedRouteAdmin(props) {
    const { Userdata } = useContext(UserContext);
    if(Userdata && Userdata.isAdmin){
        return props.children
    }
    else{
        return <Navigate to={'/'}/>
    }

}

export default ProtectedRouteAdmin
