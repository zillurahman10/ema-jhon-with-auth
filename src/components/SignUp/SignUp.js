import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    if (loading) {
        return <h1 style={{ display: 'flex', justifyContent: 'center' }}>Loading...</h1>
    }

    if (user) {
        navigate('/login')
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Your two passwords did'nt match!")
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer")
            return;
        }

        createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('user created');
            })
    }

    return (
        <div className='signup-form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <div className='link-signup'>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
                <hr className='hr' /><p className='or'>or</p><hr className='hr' />
                <div className='google-container'>
                    <button className='google'> <img src="" alt="" /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;