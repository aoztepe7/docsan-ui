import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noImageMale from '../assets/img/no-image-male.png';

const Profile = () => {
    const navigate = useNavigate();
    const inputFile = useRef(null);
    const [userImage, setImage] = useState(noImageMale);
    useEffect(() => {
    }, []);

    const onUploadClick = () => {
        inputFile.current.click();
    };

    function handleFileChange(e) {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    function handleDashboardClick() {
        navigate('');
    }

    return (
        <Fragment>

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>My Profile</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a onClick={handleDashboardClick}>Dashboard</a></li>
                                <li className="breadcrumb-item active">My Profile</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content profile-container">
                <div className="card">
                    <div className="card-body box-profile">
                        <div className="text-center">
                            <img className="profile-user-img img-fluid img-circle"
                                src={userImage}
                                alt="User profile picture" />
                        </div>
                        <input type='file' id='file' ref={inputFile} onChange={handleFileChange} style={{ display: 'none' }} />
                        <div className="text-center upload-button">
                            <button onClick={onUploadClick} className="btn btn-default btn-sm"> Change </button>
                        </div>

                        <div>
                            <form className="table">
                                <div className="row profile-form">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Birth Date</label>
                                            <input type="date" className="form-control" id="birthDate" placeholder="Birth Date" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <select className="form-control">
                                                <option value={0}>Not Selected </option>
                                                <option value={1}> Male </option>
                                                <option value={2}> Female </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row button-holder">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>


    )
}

export default Profile;