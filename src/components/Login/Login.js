import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
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