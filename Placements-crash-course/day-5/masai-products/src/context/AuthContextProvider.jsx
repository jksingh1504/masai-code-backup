import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  let [authDetails, setAuthDetails] = useState({
    isAuth: false, token:""
  })
  let providerState = {
      authDetails,
      login: (token)=>{
       setAuthDetails({
        isAuth: true,
        token
       })
      },
      logout: ()=>{
      setAuthDetails({
        isAuth: false,
        token: ""
      })}
  };

  return < AuthContext.Provider value={providerState}>
    {children}
  </AuthContext.Provider>

  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **
};
