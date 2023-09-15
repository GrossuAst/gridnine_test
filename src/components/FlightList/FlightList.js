import React from "react";

import './FlightList.css';

import Card from "../Card/Card";
import ExpandButton from "../ExpandButton/ExpandButton";

export default function FlightList({ 
    ticketsToShow, 
    visibleTickets,
     updateVisibleTickets 
}) {
    
    return(
        <div className="container">
            <ul className="flight-list">
                { ticketsToShow.slice(0, visibleTickets).map((f) => 
                    <li key={ f.flightToken } className="flight-list__item">
                    <Card
                        // для шапки билета **
                        // нет данных для логотипа авиакомпании, поэтому в шапке отображаю ее название
                        company={ f.flight.carrier.caption }
                        totalPrice={ f.flight.price.total.amount }

                        // для первого маршрута **
                        // отправление *
                        departureCityFirstTicket={ f.flight.legs[0].segments[0].departureCity.caption }
                        departureAirportFirstTicket={ f.flight.legs[0].segments[0].departureAirport.caption }
                        departureAirportCodeFirstTicket={ f.flight.legs[0].segments[0].departureAirport.uid }
                        // дата отправления первого маршрута *
                        departureDateFirstTicket={ f.flight.legs[0].segments[0].departureDate }
                        // прибытие *
                        // добавлена проверка на наличие ключа arrivalCity, т.к. в некоторых объектах такого ключа нет
                        arrivalCityFirstTicket={ 
                            f.flight.legs[0].segments.length === 2 &&
                            f.flight.legs[0].segments[1].arrivalCity ? 
                            f.flight.legs[0].segments[1].arrivalCity.caption : f.flight.legs[0].segments[0].arrivalCity.caption
                        }
                        arrivalAirportFirstTicket={ 
                            f.flight.legs[0].segments.length === 2 ? 
                            f.flight.legs[0].segments[1].arrivalAirport.caption : f.flight.legs[0].segments[0].arrivalAirport.caption 
                        }
                        arrivalAirportCodeFirstTicket={ 
                            f.flight.legs[0].segments.length === 2 ?
                            f.flight.legs[0].segments[1].arrivalAirport.uid : f.flight.legs[0].segments[0].arrivalAirport.uid
                        }
                        // дата прилета первого маршрута *
                        arrivalDateFirstTicket={ 
                            f.flight.legs[0].segments.length === 2 ? 
                            f.flight.legs[0].segments[1].arrivalDate : f.flight.legs[0].segments[0].arrivalDate
                        }
                        // рейс прямой?
                        isDirectFirstTicket={ f.flight.legs[0].segments.length === 1 ? true : false }
                        // длительность *
                        durationFirstTicket={ f.flight.legs[0].duration }
                        // кто выполеняет рейс *
                        airlineFirstTicket={ f.flight.legs[0].segments[0].airline.caption }

                        // для обратного маршрута **
                        // отправление *
                        // для некоторых маршрутов нет ключа departureCity, добавлена проверка
                        departureCitySecondTicket={ 
                            f.flight.legs[1].segments[0].departureCity ?
                            f.flight.legs[1].segments[0].departureCity.caption : 'Лондон'
                        }
                        departureAirportSecondTicket={ f.flight.legs[1].segments[0].departureAirport.caption }
                        departureAirportCodeSecondTicket={ f.flight.legs[1].segments[0].departureAirport.uid }
                        // дата вылета второго маршрута *
                        departureDateSecondTicket={ f.flight.legs[1].segments[0].departureDate }
                        // прибытие *
                        arrivalCitySecondTicket={
                            f.flight.legs[1].segments.length === 2 ?
                            f.flight.legs[1].segments[1].arrivalCity.caption : f.flight.legs[1].segments[0].arrivalCity.caption
                        }
                        arrivalAirportSecondTicket={
                            f.flight.legs[1].segments.length === 2 ? 
                            f.flight.legs[1].segments[1].arrivalAirport.caption : f.flight.legs[1].segments[0].arrivalAirport.caption 
                        }
                        arrivalAirportCodeSecondTicket={
                            f.flight.legs[1].segments.length === 2 ?
                            f.flight.legs[1].segments[1].arrivalAirport.uid : f.flight.legs[1].segments[0].arrivalAirport.uid
                        }
                        arrivalDateSecondTicket={ 
                            f.flight.legs[1].segments.length === 2 ? 
                            f.flight.legs[1].segments[1].arrivalDate : f.flight.legs[1].segments[0].arrivalDate
                         }
                        // рейс прямой?
                        isDirectSecondTicket={ f.flight.legs[1].segments.length === 1 ? true : false }
                        // длительность *
                        durationSecondTicket={ f.flight.legs[1].duration }
                        // кто выполняет рейс *
                        airlineSecondTicket={ f.flight.legs[1].segments[0].airline.caption }
                    />
                </li>
                ) }
            </ul>
            <ExpandButton 
                updateVisibleTickets={ updateVisibleTickets }
            />
        </div>
    )
}