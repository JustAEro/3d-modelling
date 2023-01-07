import React from "react";

import { Link } from "react-router-dom";

import './CardOfModel.scss';

const CardOfModel = ({ userName, modelImgUrl }) => {
    return (
        
            <div className="user-model-card">
                <h3 className="card-header">{userName}</h3>
                <Link to="/model" className="model-link">
                    <img className="model-img" src={modelImgUrl} alt="Error" />
                </Link>
            </div>
        
    );
}

export default CardOfModel;