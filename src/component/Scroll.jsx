import React, { useState } from 'react';

function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            const userData = {
                firstName,
                lastName,
                email,
                password,
            };
            console.log(userData);
            // Call API to register user
            // ...
            // Display user information
            displayUserInfo(userData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!firstName) {
            errors.firstName = 'First name  cannot be Empty';
        }
        if (!lastName) {
            errors.lastName = 'Last name cannot be Empty';
        }
        if (!email) {
            errors.email = 'Email cannot be Empty';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (!password) {
            errors.password = 'Password cannot be Empty';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        if (!confirmPassword) {
            errors.confirmPassword = '';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;

    };

    const displayUserInfo = (userData) => {

        console.log('User information:');
        console.log(userData);
        // Display user information on the page
        document.getElementById('user-info').innerHTML = `
      
      <p>Dear ${userData.firstName},</p>
      <p>Unfortunately, Am  off line kindly Reach out to me 09052351059<p/>
      
    `;
    };

    return (
        <div className=' bg-amber-400 items-center justify-center flex h-{1300} mt-5'>
            <form onSubmit={handleSubmit} className='ml-5'>
                <label>
                    <div className='items-center justify-center flex text-2xl text-cyan-700'> Welcome to MY Test-site </div>
                    <h1 className='text-zinc-600'> Please Kindly filling the form below</h1>
                    First name:
                    <br />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-white border-2 rounded' />
                    {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                </label>
                <br />
                <label>
                    Last name: <br />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-white border-2 rounded' />
                    {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                </label>
                <br />
                <label>
                    Email:<br></br>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-white border-2 rounded' />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </label>
                <br />
                <label>
                    Password:<br></br>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='bg-white border-2 rounded' />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </label>
                <br />
                <label>
                    Confirm password:<br></br>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='bg-white border-2 rounded' />
                    {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                </label>
                <br />
                <button type="submit" className='bg-black text-white rounded-2xl w-20 h-8 mb-2 mt-2 justify-center align-middle items-center flex'>Sign Up</button>
            </form>
            <div id="user-info"></div>
        </div>
    );
}

export default SignUp;