import React from "react";

import './MainPage.css'

import Filter from "../Filter/Filter";
import FlightList from "../FlightList/FlightList";

export default function MainPage({ 
    ticketsToShow, 
    visibleTickets, 
    updateVisibleTickets, 
    filteringByDuration,
    filteringByAscendingPrice, 
    filteringByPriceDescending 
}) {
    return(
        <main className="main">
            <section className="flights">
                <Filter 
                    filteringByDuration={ filteringByDuration }
                    filteringByAscendingPrice={ filteringByAscendingPrice }
                    filteringByPriceDescending={ filteringByPriceDescending }
                />
                <FlightList 
                    ticketsToShow={ ticketsToShow }
                    visibleTickets={ visibleTickets }
                    updateVisibleTickets={ updateVisibleTickets }
                />
            </section>
        </main>
    )
}