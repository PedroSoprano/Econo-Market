import "./style.css";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../Assets/Login/logo.png";
import TaskImg from "../../Assets/Login/login-img.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ButtonRegister } from "../Button";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import { UserContext } from "../../Providers/userProvider";

function Login() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const newData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("https://ecomarketapi.herokuapp.com/login", newData)
      .then((res) => LoginSuccess(res))
      .catch((err) => LoginFailed(err));
  };

  function validateUser() {
    localStorage.getItem("type") === "consumer"
      ? navigate("/")
      : navigate("/seller/dashboard");
  }

  const LoginSuccess = (data) => {
    toast.success("Logado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.setItem("token", data.data.accessToken);
    localStorage.setItem("id", data.data.user.id);
    data.data.user.cnpj === undefined
      ? localStorage.setItem("type", "consumer")
      : localStorage.setItem("type", "seller");
    validateUser();
  };

  const LoginFailed = (data) => {
    toast.error("Dados Incorretos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="mainContainerLogin">
    <div className="containerLogin">
      <img src={Logo} alt="Cadastre-se" className="logoLoginPage"/>
      <div className="ContainerFormLogin">
        <div className="containerLoginForm">
          <div className="headercontainerLoginForm">
            <div className="headercontainerLoginForm2">
              <h2>Faça seu Login</h2>
            </div>
          </div>
          <form
            className="registerConsumerForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input placeholder="E-mail" {...register("email")} />
            <span className="errorSpan">{errors.email?.message}</span>
            <input
                  placeholder="Senha"
                  type="password"
                  {...register("password")}
                />
                <span className="errorSpan">{errors.password?.message}</span>
            
            <ButtonRegister type="submit" text="Login" />
            <p className="ctaRegisterSeller">
              Não é cadastrado?{" "}
              <Link to="/consumer/register" className="ctaLinkLogin">
                Clique aqui
              </Link>{" "}
              e registre-se para aproveitar o Economarketing!
            </p>
          </form>
        </div>
        <div className="containerLoginForm2">
          <img src={TaskImg} alt="Cadastre-se" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
