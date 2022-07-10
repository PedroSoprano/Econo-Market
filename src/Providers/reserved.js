import { createContext, useState } from "react";

import axios from "axios";

export const ReservedContext = createContext([]);

export const ReservedProvider = ({ children }) => {
  const [userReservedList, setUserReservedList] = useState([]);

  const base_URL = "https://ecomarketapi.herokuapp.com";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnN1bWlkb3JAZ21haWwuY29tIiwiaWF0IjoxNjU3MjkwNjU0LCJleHAiOjE2NTcyOTQyNTQsInN1YiI6IjEifQ.9qC_qujWuv3f59vPSkNZAaCkhnWIOYGgYMPP0nuwrDU";

  const userId = 1;

  // const token = JSON.parse(localStorage.getItem("token"));
  // const userId = JSON.parse(localStorage.getItem("userId"));

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
      value={{ userReservedListRequest, addToReservedItem, userReservedList }}
    >
      {children}
    </ReservedContext.Provider>
  );
};
