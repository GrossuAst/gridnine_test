import React from "react";

import './FlightList.css';

import Card from "../Card/Card";
import ExpandButton from "../ExpandButton/ExpandButton";

export default function FlightList() {
    return(
        <div className="container">
            <ul className="flight-list">
                <li className="flight-list__item"><Card></Card></li>
                <li className="flight-list__item"><Card></Card></li>
            </ul>
            <ExpandButton></ExpandButton>
        </div>
    )
}