import "./style.css";

import { useEffect, useState } from "react";

import axios from "axios";

function EditSellerForm() {
  const [sellerData, setSellerData] = useState([]);
  const [sellerAddress, setSellerAddress] = useState([]);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  const base_URL = "https://ecomarketapi.herokuapp.com";

  useEffect(() => {
    axios
      .get(`${base_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSellerData(response.data);
        setSellerAddress(response.data.adress);
      })
      .catch((err) => console.log(err));
  });

  return (
    <form className="editSellerForm">
      <div className="formTitle">Editar Informações</div>

      <div className="formGroup">
        <label className="editFormLabel">Nome</label>
        <input
          className="editFormInput"
          id="name"
          type="text"
          placeholder="Nome"
          defaultValue={sellerData.name}
        />
      </div>

      <div className="formGroup">
        <label className="editFormLabel">E-mail</label>
        <input
          className="editFormInput"
          id="email"
          type="email"
          placeholder="E-mail"
          defaultValue={sellerData.email}
        />
      </div>

      <div className="formGroup">
        <label className="editFormLabel">CNPJ</label>
        <input
          className="editFormInput"
          id="cnpj"
          type="number"
          placeholder="CNPJ"
          defaultValue={sellerData.cnpj}
        />
      </div>

      <div className="smallInput">
        <div className="formGroup">
          <label className="editFormLabel">Rua</label>
          <input
            className="editFormInputSmall"
            id="rua"
            type="text"
            placeholder="Rua"
            defaultValue={sellerAddress.rua}
          />
        </div>
        <div className="formGroup">
          <label className="editFormLabel">Número</label>
          <input
            className="editFormInputSmall"
            id="numero"
            type="number"
            placeholder="Número"
            defaultValue={sellerAddress.numero}
          />
        </div>
      </div>

      <div className="smallInput">
        <div className="formGroup">
          <label className="editFormLabel">Bairro</label>
          <input
            className="editFormInputSmall"
            id="bairro"
            type="text"
            placeholder="Bairro"
            defaultValue={sellerAddress.bairro}
          />
        </div>
        <div className="formGroup">
          <label className="editFormLabel">Cidade</label>
          <input
            className="editFormInputSmall"
            id="cidade"
            type="text"
            placeholder="Cidade"
            defaultValue={sellerAddress.cidade}
          />
        </div>
      </div>

      <div className="formGroup">
        <label className="editFormLabel">Estado</label>
        <input
          className="editFormInput"
          id="estado"
          type="text"
          placeholder="Estado"
          defaultValue={sellerAddress.estado}
        />
      </div>

      <div className="formGroup">
        <label className="editFormLabel">URL do avatar</label>
        <input
          className="editFormInput"
          id="avatar"
          type="text"
          placeholder="URL do avatar"
        />
      </div>

      <button className="saveEditBtn">Salvar</button>
    </form>
  );
}

export default EditSellerForm;
