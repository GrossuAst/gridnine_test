import React from "react";

import './MainPage.css'

import Filter from "../Filter/Filter";
import FlightList from "../FlightList/FlightList";

export default function MainPage() {
    return(
        <main className="main">
            <section className="flights">
                <Filter></Filter>
                <FlightList></FlightList>
            </section>
        </main>
    )
}