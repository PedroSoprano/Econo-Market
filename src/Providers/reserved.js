import { createContext, useState } from "react";

import axios from "axios";

export const ReservedContext = createContext([]);

export const ReservedProvider = ({ children }) => {
  const [userReservedList, setUserReservedList] = useState([]);
  const [sellerReservedList, setSellerReservedList] = useState([]);

  const base_URL = "https://ecomarketapi.herokuapp.com";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbnN1bWlkb3JAZ21haWwuY29tIiwiaWF0IjoxNjU3NDgyNTY2LCJleHAiOjE2NTc0ODYxNjYsInN1YiI6IjEifQ.a0kPcfMLVfH3OagjxOAr2z8cvXZz0baNgDoKTay_pI0";

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

  const sellerReservedListRequest = () => {
    axios
      .get(`${base_URL}/reserved?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setSellerReservedList(response.data))
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
      value={{
        userReservedListRequest,
        addToReservedItem,
        userReservedList,
        setUserReservedList,
        sellerReservedListRequest,
        sellerReservedList,
        setSellerReservedList,
      }}
    >
      {children}
    </ReservedContext.Provider>
  );
};

// {
//   "email": "consumidor2@gmail.com",
//   "password": "123456",
//   "name": "John Petrucci",
//   "cpf": "01234567890",
// }

// {
//   "email": "consumidor3@gmail.com",
//   "password": "123456",
//   "name": "John Myung",
//   "cpf": "12345678910",
// }

// {
//   "email": "comerciante2@gmail.com",
//   "password": "123456",
//   "name": "Mercado Metropolis",
//   "cnpj": "11234567000190",
//   "adress": {
//     "rua": "Rua Gonçalves Dias",
//     "numero": 603,
//     "bairro": "Funcionários",
//     "cidade": "Belo Horizonte",
//     "estado": "MG"
//   },
// }

// {
//   "email": "comerciante3@gmail.com",
//   "password": "123456",
//   "name": "Mercado dos Sonhos",
//   "cnpj": "99876543000121",
//   "adress": {
//     "rua": "Avenida Nossa Senhora de Copacabana",
//     "numero": 1017,
//     "bairro": "Copacabana",
//     "cidade": "Rio de Janeiro",
//     "estado": "RJ"
//   },
// }
