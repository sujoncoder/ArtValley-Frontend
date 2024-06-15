"use client";

import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";

// Create a UserContext to hold user-related state and actions
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap around the app and provide user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Token not found on local storage");
      }
      try {
        const decodedToken = jwtDecode(token);
        const response = await fetch(
          `http://localhost:5000/api/v1/user/${decodedToken._id}`
        );
        const userData = await response.json();
        console.log(userData);
        setUser(userData);
      } catch (error) {
        console.log("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
