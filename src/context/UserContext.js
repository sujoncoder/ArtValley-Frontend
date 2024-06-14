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
  const [token, setToken] = useState(null);

  // useEffect to fetch user details if a token is found in localStorage
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Function to fetch user details from the API
  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("find token", token);
      if (token) {
        const decodedToken = jwtDecode(token);
        console.log("decoded token is", decodedToken);

        if (decodedToken && decodedToken._id) {
          const response = await fetch(
            `http://localhost:5000/api/v1/user/${decodedToken._id}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Decoded token is missing the user ID");
        }
      } else {
        console.error("Token is missing");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
