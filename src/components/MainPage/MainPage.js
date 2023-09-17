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
    handleRadioStateChange,
    // состояния чекбоксов пересадок и их хэндлеры
    noStopsChecked,
    oneStopChecked,
    handleNoStopsChecked,
    handleOneStopChecked,
    setMinPrice,
    setMaxPrice,
    airlinesChecked,
    handleAirlineCheck,
    // airlines,
}) {
    return(
        <main className="main">
            <section className="flights">
                <Filter 
                    ticketsToShow={ ticketsToShow }

                    filteringByDuration={ filteringByDuration }
                    filteringByAscendingPrice={ filteringByAscendingPrice }
                    filteringByPriceDescending={ filteringByPriceDescending }
                    handleRadioStateChange={ handleRadioStateChange }

                    // обработчики чекбоксов
                    handleNoStopsChecked={ handleNoStopsChecked }
                    handleOneStopChecked={ handleOneStopChecked }

                    setMinPrice={ setMinPrice }
                    setMaxPrice={ setMaxPrice }

                    noStopsChecked={ noStopsChecked }
                    oneStopChecked={ oneStopChecked }

                    handleAirlineCheck={ handleAirlineCheck }
                    airlinesChecked={ airlinesChecked }
                    // airlines={ airlines }
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