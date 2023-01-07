import React from "react";

import CardOfModel from "./CardOfModel";

import './GroupOfCards.scss';

export default function GroupOfCards () {
    return (
        <div className="wrapper">
            <CardOfModel className="user-model-card" userName={"fsf"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"john"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"vxcvxvxc"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"hyuyutyuytutyfsd"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"qqeqe"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"eqdf"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"bmn"} modelImgUrl={"/img-model-sample.jpg"} />
            <CardOfModel className="user-model-card" userName={"qeqeq"} modelImgUrl={"/img-model-sample.jpg"} />
        </div>
    );
}