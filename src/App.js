import React from 'react'

import './App.css';
import {useNavigate} from "react-router-dom";

export const USER_LS_KEY = "user";

function App() {
    const navigate = useNavigate();

    React.useEffect(() => {
        // go to login page
        const alreadyLoggedIn = JSON.parse(localStorage.getItem(USER_LS_KEY)) !== null;
        if (!alreadyLoggedIn) {
            navigate("/login");
        }
        else {
            navigate("/user");
        }
    }, [navigate]);

    return null;
}

export default App;
