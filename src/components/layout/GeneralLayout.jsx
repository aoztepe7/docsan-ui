import { Fragment } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const GeneralLayout = () => {
    return (
        <Fragment>
            <div className="wrapper">
                <div className="page-body-wrapper">
                    <Navbar />
                    <Sidebar />
                    <div className="content-wrapper">
                        <Outlet />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    )
}

export default GeneralLayout;