import { createContext, useState, useEffect } from "react";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [Authorization, setAuthorization] = useState(null);
    const [Userdata, setUserdata] = useState(null);

    // Load user data from localStorage on mount
    useEffect(() => {
        const storedUserData = localStorage.getItem("Userdata");
        const storedToken = localStorage.getItem("Authorization");
        
        if (storedUserData) {
            setUserdata(JSON.parse(storedUserData));
        }
        if (storedToken) {
            setAuthorization(storedToken);
        }
    }, []);

    return (
        <UserContext.Provider value={{ Authorization, setAuthorization, setUserdata, Userdata }}>
            {children}
        </UserContext.Provider>
    );
}
