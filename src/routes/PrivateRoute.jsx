import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false)
    const jwt_token = localStorage.getItem('token');

    useEffect(() => {
        var storedUserInfo = localStorage.getItem('user');
        if (storedUserInfo != '' && storedUserInfo != null && jwt_token != '' && jwt_token != null) {
            setCurrentUser(JSON.parse(storedUserInfo));
            setAuthenticated(true);
        }
    }, []);

    return (
        currentUser !== null || authenticated || jwt_token ? <Outlet /> : <Navigate to={"/login"} />);
}

export default PrivateRoute;