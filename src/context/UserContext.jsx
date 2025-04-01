import { createContext, useState } from "react";
import { CONFIG } from '../config';

export const UserContext = createContext();

export function UserContextProvider({ children }) {

  const [platform, setPlatform] = useState(CONFIG.PLATFORMS[0]);
  const [username, setUsername] = useState("");
  const [userAvatarUrl, setUserAvatarUrl] = useState("");

  const contextValue = {
    platform,
    setPlatform,
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

