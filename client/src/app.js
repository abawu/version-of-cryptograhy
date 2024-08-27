// client/src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Upload from './components/Upload';

const App = () => {
    const [token, setToken] = useState(null);

    return ( <
        div > {
            token ? ( <
                Upload token = { token }
                />
            ) : ( <
                >
                <
                Register / >
                <
                Login setToken = { setToken }
                /> < / >
            )
        } <
        /div>
    );
};

export default App;