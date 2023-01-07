import { Link } from "react-router-dom";

import "./SearchPanel.scss"

export default function SearchPanel() {
    return (
        <div className="search-panel">
            <h3 className="search-text">Поиск</h3>
            <Link to="">
                <img className="search-icon" src="/search-icon.png" alt="Error"/>
            </Link>
        </div>
    )
}