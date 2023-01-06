import React from "react";

import './CardOfModel.scss';

const CardOfModel = ({ userName, modelImgUrl }) => {
    return (
        
            <div className="user-model-card">
                <h3 className="card-header">{userName}</h3>
                <img className="model-img" src={modelImgUrl} alt="Error" />
                
            </div>
        
    );
}

export default CardOfModel;