import React, { useState } from 'react';
import UserInfo from './UserInfo';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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
            setIsSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!firstName) {
            errors.firstName = 'First name is required';
        }
        if (!lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    if (isSubmitted) {
        return <UserInfo userData={{ firstName, lastName, email, password }} />;
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                </label>
                <br />
                <label>
                    Last name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </label>
                <br />
                <label>
                    Confirm password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;