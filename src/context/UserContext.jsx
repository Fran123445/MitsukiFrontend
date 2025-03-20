import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  
  const [username, setUsername] = useState("");
  const [userAvatarUrl, setUserAvatarUrl] = useState("");

  const contextValue = {
    username,
    setUsername,
    userAvatarUrl,
    setUserAvatarUrl
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

