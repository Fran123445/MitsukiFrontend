import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { CONFIG } from '../config';

export const UserContext = createContext();

export function UserContextProvider({ children }) {

  const [platform, setPlatform] = useState(() => Cookies.get("platform") || CONFIG.PLATFORMS[0]);
  const [username, setUsername] = useState(() => Cookies.get("username") || "");
  const [userAvatarUrl, setUserAvatarUrl] = useState(() => Cookies.get("userAvatarUrl") || ""); 

  useEffect(() => {
    Cookies.set("platform", platform);
    Cookies.set("username", username);
    Cookies.set("userAvatarUrl", userAvatarUrl);
  }, [platform, username, userAvatarUrl]);

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
