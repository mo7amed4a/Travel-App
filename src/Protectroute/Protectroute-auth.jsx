import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Context/Usercontext';



function ProtectedRouteAuthNotRequired(props) {
    const { Userdata } = useContext(UserContext);
    if(!Userdata){
        return props.children
    }
    else{
        return <Navigate to={'/'}/>
    }

}

export default ProtectedRouteAuthNotRequired
