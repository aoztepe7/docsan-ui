import { toUnloading, toLoading } from '../utils/Loading';
import React, { useRef, useEffect } from 'react';
import { LogIn } from '../utils/ApiClient';
import { toast } from 'react-toastify';



const Login = () => {

    const email = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        email.current.value = "john@doe.com";
        password.current.value = "1234aaaa";
    }, []);

    function submitForm(e) {
        e.preventDefault();
        if (email.current.value == '' || password.current.value == '') {
            toast.error('Please enter your mail and password');
            return;
        }

        toLoading();
        var request = {
            mail: email.current.value,
            password: password.current.value
        }

        LogIn(request);
        toUnloading();
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <span className="brand-big">doc<b>2</b>read</span>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={submitForm}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" ref={email} placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" ref={password} placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label>
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <p className="mb-1">
                            <a>I forgot my password</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login;