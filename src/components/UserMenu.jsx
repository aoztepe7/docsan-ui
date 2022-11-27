import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserMenu = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    function logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate("/login");
    }

    function handleProfileClick() {
        navigate('/profile');
    }


    return (
        <Fragment>
            <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fas fa-user"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">

                <a onClick={handleProfileClick} className="dropdown-item">
                    <i className="fas fa-user mr-2"></i> My Profile
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <div>
                    <a onClick={logout} className="dropdown-item dropdown-footer">Sign Out</a>
                </div>
            </div>
        </Fragment>
    )
}

export default UserMenu;