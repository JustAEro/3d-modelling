import { Link } from "react-router-dom";

import SearchPanel from "./SearchPanel";

import "./Header.scss"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img className="Logo" src="/3DLogo.png" alt="Error"/>
            </Link>
            <SearchPanel />
            <Link className="load-model-link" to="">
                <h3 className="load-model">Загрузить модель</h3>
            </Link>
            <Link className="login-reg-button" to="/login">
                <h3 className="login-reg">Вход / регистрация</h3>
            </Link>
        </header>
    );
}