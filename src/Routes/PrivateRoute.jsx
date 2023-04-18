import React, { useContext } from 'react';
import { UserContext } from '../components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext)
    const location = useLocation()

    if(loading){
        return <div>loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;