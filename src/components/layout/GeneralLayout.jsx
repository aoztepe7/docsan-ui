import { Fragment } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const GeneralLayout = () => {
    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="page-body-wrapper">
                    <Navbar />
                    <Sidebar />
                    <div className="page-body">
                        <div className="content-wrapper">
                            <div className="content-header">
                                <div className="container-fluid">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    )
}

export default GeneralLayout;