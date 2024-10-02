import { createContext, useState } from "react";


export let UserContext = createContext();


export default function UserContextProvider({ children }) {

    const [Authorization, setAuthorization] = useState(null);

    return (
        <UserContext.Provider value={{ Authorization, setAuthorization }}>
            {children}
        </UserContext.Provider>
    );
}
