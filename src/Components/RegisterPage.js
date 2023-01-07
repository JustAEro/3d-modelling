import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./Header";

import "./RegisterPage.scss"

export default function RegisterPage(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        if (!(userName && password && firstName && lastName)) {
            setError(true)
        }
    }

    return (
        <div>
            <Header />
            <form className="register-form" name="form" onSubmit={handleSubmit}>
                <h3 className='reg-form-name'>Регистрация</h3>

                {
                    submitted && error && <h5 style={{color:"red",width:"fit-content",height:"25px",position:"relative",top:"2%"}}>Ошибка регистрации</h5>
                }
                {
                    submitted && !error && <h5 style={{color:"green",width:"fit-content",height:"25px"}}>Успешно</h5>
                }
                {
                    !submitted && !error && <div style={{width:"fit-content",height:"25px"}}></div>
                }

                <label className='label-first-name' for="first-name">Имя</label>
                <input type="text" placeholder="Имя" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={'form-control' + (submitted && !firstName ? ' is-invalid' : '')} />
                {submitted && !firstName &&
                    <div className="invalid-feedback"></div>
                }

                <label for="last-name" className='label-last-name'>Фамилия</label>
                <input type="text" placeholder="Фамилия" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={'form-control' + (submitted && !lastName ? ' is-invalid' : '')} />
                {submitted && !lastName &&
                    <div className="invalid-feedback"></div>
                }
        
                <label for="username" className='label-username'>E-mail</label>
                <input type="text" placeholder="Email" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                {submitted && !userName &&
                    <div className="invalid-feedback"></div>
                }
                
                
                <label for="password" className='label-passwd'>Пароль</label>
                <input type="password" placeholder="Пароль" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                {submitted && !password &&
                    <div className="invalid-feedback"></div>
                }
                

                <button className="register-button" style={{ textDecoration: 'none' }}>
                    Зарегистрироваться
                </button>

                <h5 className="h5-log">У вас уже есть учётная запись? Выполните вход.</h5>

                <button className="login-button" style={{ textDecoration: 'none' }} onClick={()=> navigate('/login') }>
                    Войти
                </button>
                
                
            </form>
        </div>
    );
}