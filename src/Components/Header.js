import { Link } from "react-router-dom";

import SearchPanel from "./SearchPanel";

import "./Header.scss"

export default function Header() {
    return (
        <header>
            <Link to="/canvas">
                <img className="Logo" src="/3DLogo.png" alt="Error"/>
            </Link>
            <SearchPanel/>
        </header>
    );
}