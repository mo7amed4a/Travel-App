import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export let DataContext = createContext();

export default function DataContextProvider({ children }) {
    // const storedToken = localStorage.getItem("Authorization");
    const [posts, setPosts] = useState(null);
    const [packagesData, setPackagesData] = useState(null);
    let {
        data: postsData,
        loading: postsLoading,
        error: postsError,
      } = useFetch("/posts");
    useEffect(() => {
        if (postsData) {
            setPosts(postsData?.data?.posts);
        }
    }, [postsData]);

    return (
        <DataContext.Provider value={{ posts, setPosts, packagesData, setPackagesData }}>
            {children}
        </DataContext.Provider>
    );
}
