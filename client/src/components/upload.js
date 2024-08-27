// client/src/components/Upload.js
import React, { useState } from 'react';
import axios from 'axios';

const Upload = ({ token }) => {
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('password', password);

        const response = await axios.post('http://localhost:5000/api/auth/encrypt', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        alert('Encrypted File: ' + response.data.encryptedFile);
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "file"
        onChange = { handleFileChange }
        /> <
        input type = "text"
        placeholder = "Password for encryption"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        /> <
        button type = "submit" > Upload and Encrypt < /button> < /
        form >
    );
};

export default Upload;