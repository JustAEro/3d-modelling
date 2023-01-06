import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./Header";

import "./LoginPage.scss";

export default function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const navigate =  useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div>
            <Header />
            <form className='login-form' onSubmit={handleSubmit}>
                <h3 className='login-form-name'>Войти</h3>
                {error && 
                    <h5 style={{color: 'red', fontSize: '11pt', textAlign: 'center'}}>
                        {error} 
                    </h5>
                }
                <label className='label-user' for="username">E-mail</label>
                    <div className='form-control-username'>
                        <input type="text" placeholder="Email" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    </div>
                    {submitted && !userName &&
                        <div className="invalid-feedback"></div>
                    }
                    
                    
                    <label className='label-passwd' for="password">Пароль</label>
                    <div className='form-control-passwd'>
                        <input type="password" placeholder="Пароль" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                        {submitted && !password &&
                            <div className="invalid-feedback"></div>
                        }
                    </div>

                    <button className="login-button">
                        Войти
                    </button>
                    
                    
                        <h5 className="h5-reg">У вас нет аккаунта? Регистрируйтесь сейчас.</h5>
                    

                    <button className="register-button" style={{ textDecoration: 'none' }} onClick={()=> navigate('/register') }>
                        Регистрация
                    </button>
            </form>
        </div>
    );
}