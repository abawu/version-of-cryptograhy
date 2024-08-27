// client/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
        setToken(response.data.token);
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Username"
        onChange = {
            (e) => setUsername(e.target.value)
        }
        /> 
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> <
        button type = "submit" > Login < /button> < /
        form >
    );
};

export default Login;