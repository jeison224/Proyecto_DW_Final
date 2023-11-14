import { useContext, createContext, useState, useEffect } from "react"
import { json } from "react-router-dom";
import {   } from "./constants";



const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => { },
  saveUser: (userData) => { },
  getRefreshToken: () => { },
  getUser: () => ({}),
  signout: () => {},
});

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setaccessToken] = useState("");
  const [user, setUser] = useState()
  const [isLoading, setIsloading] = useState(true);

  //const [refreshToken, setrefreshToken] = useState("");

  /*  useEffect(() => {
     setIsAuthenticated(Boolean(userInfo?.body?.refreshToken) || false)
     console.log(isAuthenticated, accessToken, refreshToken);
   }, [userInfo, setIsAuthenticated]) */
  useEffect(() => {
    checkAuth();
  }, []);
  async function requestnewAccessToken(refreshToken) {
    try {
      const response = await fetch(`${API_URL}/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        }
      });
      if (response.ok) {
        const json = (await response.json());
        console.log('Response Body:', json);
        if (json.error) {
          throw new Error(json.error);
        }
        return json.body.accessToken;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async function getUserInfo(accessToken) {
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        }
      });
      if (response.ok) {
        const json = await response.json();
        console.log('Response Body:', json);
        if (json.error) {
          throw new Error(json.error);
        }
        return json.body;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async function checkAuth() {
    if (accessToken) {
      const userInfo = await getUserInfo(accessToken);
      if (userInfo) {
        saveSessionInfo(userInfo, accessToken, getRefreshToken)
        setIsloading(false)
        return;
      }
    } else {
      const token = getRefreshToken();
      if (token) {
        const newAccessToken = await requestnewAccessToken(token);
        if (newAccessToken) {
          const userInfo = await getUserInfo(newAccessToken);
          if (userInfo) {
            saveSessionInfo(userInfo, newAccessToken, token)
            setIsloading(false)
            return;
          }
        }
      }
    }
    setIsloading(false);
  }
  function signout(){
    setIsAuthenticated(false);
    setaccessToken("");
    setUser(undefined);
    localStorage.removeItem("token")
  }


  function saveSessionInfo(userInfo, accessToken, refreshToken) {
    setaccessToken(accessToken);
    setUser(userInfo)
    localStorage.setItem("token", JSON.stringify(refreshToken))
    setIsAuthenticated(true);

  }

  function getAccessToken() {
    return accessToken;
  }
  function getRefreshToken() {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      const token = JSON.parse(tokenData)
      return token;
    }
    return null;
  }

  function saveUser(userData) {
    //setUserInfo(userData)
    saveSessionInfo(
      userData.body.user,
      userData.body.accessToken,
      userData.body.refreshToken,
    )
    //console.log('Ejecutando saveUser con userData:', userData);
    //console.log({ isAuthenticated });
    //return { isAuthenticated, accessToken, refreshToken }
  }
  function getUser() {
    return user;
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      getAccessToken,
      saveUser,
      getRefreshToken,
      getUser,
      signout,
    }}>
      {isLoading ? <div>Cargando</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);