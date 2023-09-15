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
    filteringByPriceDescending,
    // состояния чекбоксов пересадок и их хэндлеры
    noStopsChecked,
    oneStopChecked,
    handleNoStopsChecked,
    handleOneStopChecked,
}) {
    return(
        <main className="main">
            <section className="flights">
                <Filter 
                    filteringByDuration={ filteringByDuration }
                    filteringByAscendingPrice={ filteringByAscendingPrice }
                    filteringByPriceDescending={ filteringByPriceDescending }

                    // обработчики чекбоксов
                    handleNoStopsChecked={ handleNoStopsChecked }
                    handleOneStopChecked={ handleOneStopChecked }
                />
                <FlightList 
                    ticketsToShow={ ticketsToShow }
                    visibleTickets={ visibleTickets }
                    updateVisibleTickets={ updateVisibleTickets }
                    noStopsChecked={ noStopsChecked }
                    oneStopChecked={ oneStopChecked }
                />
            </section>
        </main>
    )
}