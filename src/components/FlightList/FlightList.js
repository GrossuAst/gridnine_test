import React from "react";

import './FlightList.css';

import Card from "../Card/Card";
import ExpandButton from "../ExpandButton/ExpandButton";

export default function FlightList({ 
    fitlredArrayByPrice, 
    visibleTickets,
     updateVisibleTickets 
}) {

    // console.log(fitlredArrayByPrice)

    function deleteWord(string) {
        const indexOfComma = string.indexOf(",");
        if(indexOfComma !== -1) {
            const resultString = string.slice(indexOfComma + 1).trim();
            return resultString;
        }
        return string;
    }
    
    return(
        <div className="container">
            <ul className="flight-list">
                { fitlredArrayByPrice.slice(0, visibleTickets).map((f) => 
                    <li key={ f.flightToken } className="flight-list__item">
                    <Card
                        // для шапки билета *
                        company={ f.flight.carrier.caption }
                        totalPrice={ f.flight.price.total.amount }

                        // для первого маршрута *
                        departureCityFirstTicket={ f.flight.legs[0].segments[0].departureCity.caption }
                        departureAirportFirstTicket={ f.flight.legs[0].segments[0].departureAirport.caption }
                        departureAirportCodeFirstTicket={ f.flight.legs[0].segments[0].departureAirport.uid }
                        arrivalCityFirstTicket={ f.flight.legs[0].segments[0].arrivalCity.caption }
                        arrivalAirportFirstTicket={ deleteWord(f.flight.legs[0].segments[0].arrivalAirport.caption) }
                        // arrivalAirportCodeFirstTicket={  }

                        // для обратного маршрута *

                    />
                </li>
                ) }
                {/* <li key={ initialFlightData.result.flights.flightToken } className="flight-list__item">
                    <Card
                        initialFlightData={ initialFlightData }
                    />
                </li> */}
                {/* <li className="flight-list__item"><Card></Card></li> */}
            </ul>
            <ExpandButton 
                updateVisibleTickets={ updateVisibleTickets }
            />
        </div>
    )
}