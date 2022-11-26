import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const [currentUser, setCurrentUser] = useState(false);
    const [authenticated, setAuthenticated] = useState(false)
    const jwt_token = localStorage.getItem('token');

    useEffect(() => {
        // const abortController = new AbortController();
        // const requestOptions = { method: 'GET', headers: authHeader() };
        // fetch('/users', requestOptions).then(handleResponse)
        // firebase_app.auth().onAuthStateChanged(setCurrentUser);
        // setAuthenticated(JSON.parse(localStorage.getItem("authenticated")))

        // return function cleanup() {
        //     abortController.abort();
        // }
    }, [jwt_token]);

    return (
        1 == 1 ? <Outlet /> : <Navigate to={"/login"} />);

}

export default PrivateRoute;