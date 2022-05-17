import React, {useContext} from "react";

import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);

    const handlelogout = () => {
        logout();
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handlelogout}>Logout</button>
        </div>        
    );
};

export default HomePage;