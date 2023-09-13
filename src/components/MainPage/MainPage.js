import React from "react";

import './MainPage.css'

import Filter from "../Filter/Filter";
import FlightList from "../FlightList/FlightList";

export default function MainPage({ 
    fitlredArrayByPrice, 
    visibleTickets, 
    updateVisibleTickets, 
    filteringByAscendingPrice, 
    filteringByPriceDescending 
}) {
    return(
        <main className="main">
            <section className="flights">
                <Filter 
                    filteringByAscendingPrice={ filteringByAscendingPrice }
                    filteringByPriceDescending={ filteringByPriceDescending }
                />
                <FlightList 
                    fitlredArrayByPrice={ fitlredArrayByPrice }
                    visibleTickets={ visibleTickets }
                    updateVisibleTickets={ updateVisibleTickets }
                />
            </section>
        </main>
    )
}