import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const ContextAPI = React.createContext();

export function useDataAPI() {
  return useContext(ContextAPI);
}

export function DataProvider({ children }) {
  const [data, setData] = useState();

  const [loginFlagAPI, setLoginFlagAPI] = useState(false);

  const insertDataInDb = (obj) => {
    axios.post("https://yanirtestapp.herokuapp.com/api/data/insert", obj).then((resp) => {
      return resp.data;
    });
  };

  const authData = (data) => {
    let obj = {
      username: data.email,
      password: data.password,
    };
    axios.post("https://yanirtestapp.herokuapp.com/api/data/verify", obj).then((resp) => {
      setLoginFlagAPI(resp.data);
    });
  };

  const value = {
    data,
    authData,
    insertDataInDb,
    loginFlagAPI,
    setLoginFlagAPI,
  };
  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
}
