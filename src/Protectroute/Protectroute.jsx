import React from 'react'
import { Navigate } from 'react-router-dom'



function ProtectedRoute(props) {

    if(localStorage.getItem('Authorization') !== null){
        return props.children
    }
    else{
        return <Navigate to={'/auth/login'}/>
    }

}

export default ProtectedRoute
