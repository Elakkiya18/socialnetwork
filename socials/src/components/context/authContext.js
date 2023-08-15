import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
    try{
      const res = await axios.post("http://localhost:8800/api/auth/login", inputs ,{
       withCredentials : true,
    
    });
    console.log("Login response:", res.data);
    if (typeof res.data === "string") {
        try {
            const parsedData = JSON.parse(res.data);
            setCurrentUser(parsedData);
        } catch (parseError) {
            console.log("Error parsing JSON:", parseError);
        }
    } else {
        console.log("Response data is not a string:", res.data);
    }
} catch (err){
    console.error("Error during login:", err);
}

};

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    );
};