import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const { signIn } = useContext(UserContext)
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from.pathname || '/';
    console.log(from)

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            {
                                show ? <button className="btn btn-xs" onClick={() => setShow(!show)}>Show Password</button> :
                                    <button className="btn btn-xs" onClick={() => setShow(!show)}>Hide Password</button>
                            }
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <Link to="/signup" className="label-text-alt link text-center link-hover">Are New? Please Register</Link>
                        <button className="btn btn-warning">Google</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Login;