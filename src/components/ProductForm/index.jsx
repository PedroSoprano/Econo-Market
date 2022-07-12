import "./style.css";

// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

function ProductForm() {
  const handleRegisterProduct = (e) => {
    e.preventDefault();
    console.log([...e.target.value]);
  };
  return (
    <form className="editSellerForm" onSubmit={(e) => handleRegisterProduct(e)}>
      <div className="formTitle">Cadastrar Produto</div>

      <div className="formGroup">
        <label className="editFormLabel" for="name">
          Nome do produto
        </label>
        <input className="editFormInput" id="name" type="text" />
      </div>

      <div className="formGroup">
        <label className="editFormLabel" for="url">
          URL da imagem
        </label>
        <input className="editFormInput" id="url" type="text" />
      </div>

      <div className="formGroup">
        <label className="editFormLabel" for="descricao">
          Descrição
        </label>
        <input className="editFormInput" id="descricao" type="text" />
      </div>

      <div className="smallInput">
        <div className="formGroup">
          <label className="editFormLabel" for="precoOriginal">
            Preço original
          </label>
          <input
            className="editFormInputSmall"
            id="precoOriginal"
            type="number"
          />
        </div>
        <div className="formGroup">
          <label className="editFormLabel" for="precoAtual">
            Preço atual
          </label>
          <input className="editFormInputSmall" id="precoAtual" type="number" />
        </div>
      </div>

      <div className="smallInput">
        <div className="formGroup">
          <label className="editFormLabel" for="estoque">
            Quantidade disponível
          </label>
          <input className="editFormInputSmall" id="estoque" type="number" />
        </div>
        <div className="formGroup">
          <label className="editFormLabel" for="vencimento">
            Data de vencimento
          </label>
          <input className="editFormInputSmall" id="vencimento" type="text" />
        </div>
      </div>

      <div className="smallInput">
        <div className="formGroup">
          <label className="editFormLabel" for="categoria">
            Categoria
          </label>
          <input className="editFormInputSmall" id="categoria" type="text" />
        </div>
        <div className="formGroup">
          <label className="editFormLabel" for="retirada">
            Prazo para retirada
          </label>
          <input className="editFormInputSmall" id="retirada" type="text" />
        </div>
      </div>

      <button className="saveEditBtn">Cadastrar</button>
    </form>
  );
}

export default ProductForm;
