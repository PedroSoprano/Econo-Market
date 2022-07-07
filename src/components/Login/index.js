import "./style.css"
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Logo from '../../Assets/Login/logo.png'
import TaskImg from '../../Assets/Login/login-img.svg'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { ButtonRegister } from "../Button";
import {toast} from "react-toastify";



function Login () {

    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required('E-mail obrigatório!')
            .email('E-mail inválido!'),
        password: yup
            .string()
            .required('Senha obrigatória!')
            .matches('^(?=.*[A-Z])(?=.*[!#@$%&?])(?=.*[0-9])(?=.*[a-z]).{6,15}$', 'Use uma senha mais forte'),
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmit = (data) => {
        const newData = {
            email: data.email,
            password: data.password
        }
        axios.post('https://ecomarketapi.herokuapp.com/login', newData)
            .then((res) => LoginSuccess(res))
            .catch((err) => LoginFailed(err))
    }

    const LoginSuccess = (data) => {
        console.log (data)
        toast.success('Cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setTimeout(() => {navigate('/')}, 2000)
    }

    const LoginFailed = (data) => {
        toast.error('E-mail já cadastrado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }


    return (
        <div className="containerLogin">
            <img src={Logo} alt="Cadastre-se"/>
            <div className="ContainerFormLogin">
                <div className="containerLoginForm">
                    <div className="headercontainerLoginForm">
                        <div className="headercontainerLoginForm2">
                            <h2>Faça seu Login</h2>
                        </div>
                    </div>
                    <form className="registerConsumerForm" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="E-mail" {...register('email')}/>
                        <span className='errorSpan'>{errors.email?.message}</span>
                        <div className="passwordContainer">
                            <div className="passwordContainer2">
                                <input placeholder="Senha" type='password' {...register('password')}/>
                                <span className='errorSpan'>{errors.password?.message}</span>
                            </div>
                        </div>
                        <ButtonRegister type='submit' text='Registrar'/>
                        <p className="ctaRegisterSeller">Não é cadastrado? <Link to='/' className="ctaLink">Clique aqui</Link> e registre-se para aproveitar o Economarketing!</p>
                    </form>
                </div>
                <div className="containerLoginForm2">
                <img src={TaskImg} alt="Cadastre-se"/>
                </div>
            </div>
            
        </div>
    )

}


export default Login