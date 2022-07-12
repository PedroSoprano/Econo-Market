import { createContext, useState } from "react";

import axios from "axios";

export const ReservedContext = createContext([]);

export const ReservedProvider = ({ children }) => {
  const [userReservedList, setUserReservedList] = useState([]);

  const base_URL = "https://ecomarketapi.herokuapp.com";

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");


  const userReservedListRequest = () => {
    axios
      .get(`${base_URL}/reserved?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUserReservedList(response.data))
      .catch((err) => console.log(err));
  };

  const addToReservedItem = () => {
    axios
      .patch(`${base_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <ReservedContext.Provider
      value={{ userReservedListRequest, addToReservedItem, userReservedList, setUserReservedList }}
    >
      {children}
    </ReservedContext.Provider>
  );
};
