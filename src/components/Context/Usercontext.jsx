import { createContext, useState, useEffect } from "react";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {
    const storedUserData = localStorage.getItem("Userdata");
    const storedToken = localStorage.getItem("Authorization");

    const [Authorization, setAuthorization] = useState(storedToken || null);
    const [Userdata, setUserdata] = useState(JSON.parse(storedUserData || null));

    return (
        <UserContext.Provider value={{ Authorization, setAuthorization, setUserdata, Userdata }}>
            {children}
        </UserContext.Provider>
    );
}
