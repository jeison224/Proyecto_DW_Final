import { useContext, createContext, useState } from "react"

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () =>{},
  saveUser:(userData)=>{},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setaccessToken] = useState<String>("");
  const [refreshToken, setrefreshToken] = useState<String>("");

  function getAccessToken(){
    return accessToken;
  }

function saveUser(userData){
  setaccessToken(userData.body.accessToken);
  setrefreshToken(userData.body.refreshToken);
  localStorage.setItem("token",JSON.stringify(userData.body.refreshToken))
  setIsAuthenticated(true);
}

  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken,saveUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);