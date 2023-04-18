import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../provider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('');

    const { signUp } = useContext(UserContext)

    const handleSignUp = (event) => {
        event.preventDefault()

        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password !== confirm) {
            setError('Password Did not match!!!')
            return;
        }
        else if (password.length < 6) {
            setError('Password Must be 6 characters or longer!!!')
            return;
        }
        signUp(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Sign up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Sign up</button>
                        </div>
                        <Link to='/login' className="label-text-alt link text-center link-hover">Already have an account? Please Login</Link>
                        <p><small className='text-red-500'>{error}</small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;