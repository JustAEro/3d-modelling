import React from "react";

import CardOfModel from "./CardOfModel";

import './GroupOfCards.scss';

export default function GroupOfCards () {
    return (
        <div className="wrapper">
            <CardOfModel className="user-model-card" userName={"Пользователь 1"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 2"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 3"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 4"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 5"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 6"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 7"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"Пользователь 8"} modelImgUrl={"/img-model-sample.jpg"} />
        </div>
    );
}