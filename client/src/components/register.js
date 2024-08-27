// client/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/auth/register', { username, password });
        alert('User registered!');
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Username"
        onChange = {
            (e) => setUsername(e.target.value)
        }
        /> <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> <
        button type = "submit" > Register < /button> < /
        form >
    );
};

export default Register;