import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()



    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }


    if (loading) {
        return <h1 style={{ display: 'flex', justifyContent: 'center' }}>Loading....</h1>
    }

    if (user) {
        navigate('/')
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <p>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <div className='link-signup'>
                    <p>New to Ema-Jhon? <Link to="/signup">Create New Account</Link></p>
                </div>
                <hr className='hr' /><p className='or'>or</p><hr className='hr' />
                <div className='google-container'>
                    <button className='google'> <img src="" alt="" /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;