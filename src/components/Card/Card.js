import React from "react";

import icon from '../../images/icon.png';
import './Card.css';

export default function Card({ 
    // для шапки *
    company,
    totalPrice,
    // для первого билета *
    departureCityFirstTicket,
    departureAirportFirstTicket,
    departureAirportCodeFirstTicket,
    departureDateFirstTicket,
    arrivalCityFirstTicket,
    arrivalAirportFirstTicket,
    arrivalAirportCodeFirstTicket,
    arrivalDateFirstTicket,
    isDirectFirstTicket,
    durationFirstTicket,
    airlineFirstTicket,
    // для обратного билета
    departureCitySecondTicket,
    departureAirportSecondTicket,
    departureAirportCodeSecondTicket,
    departureDateSecondTicket,
    arrivalCitySecondTicket,
    arrivalAirportSecondTicket,
    arrivalAirportCodeSecondTicket,
    arrivalDateSecondTicket,
    isDirectSecondTicket,
    durationSecondTicket,
    airlineSecondTicket,
}) {

    // переводит минуты в нужный формат
    function convertDuration(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours} ч ${minutes} мин`;
    };

    // форматирует дату в число:месяц:день
    function formatDate(string) {
        const months = ['янв.', 'фев.', 'мар.', 'апр.', 'май', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

        const date = new Date(string);

        const day = date.getDate();
        const month = months[date.getMonth()];
        const dayOfWeek = days[date.getDay()];

        return `${day} ${month} ${dayOfWeek}`;
    }

    function getTimeFromDate(date) {
        const startIndex = date.indexOf('T') + 1;
        const endIndex = startIndex + 5;
        const time = date.slice(startIndex, endIndex);
        return time;
    }

    return(
        <article className="card">
            <div className="card__header">
                <p className="card__airline-logo">{ company }</p>
                <p className="card__total-price">
                    { totalPrice } &#8381;
                    <span className="card__total-price-description">Стоимость для одного взрослого пассажира</span>
                </p>
            </div>

            {/* Первый билет Москва-Лондон*/}
            <div className="card__departure-flight">
                <div className="card__direction-info">
                    <h3 className="card__city">
                        { departureCityFirstTicket }, { departureAirportFirstTicket }
                        <span className="card__airport-code">&nbsp;({ departureAirportCodeFirstTicket })</span>
                    </h3>
                    <div className="card__arrow">&#10230;</div>
                    <h3 className="card__city card__city_type_arrival">
                        { arrivalCityFirstTicket }, { arrivalAirportFirstTicket }
                        <span className="card__airport-code">&nbsp;({ arrivalAirportCodeFirstTicket })</span>
                    </h3>
                </div>
                <div className="card__time-container">
                    <div className="card__time-info">
                        <p className="card__time">{ getTimeFromDate(departureDateFirstTicket) }
                            <span className="card__date">{ formatDate(departureDateFirstTicket) }</span>
                        </p>
                    </div>
                    <p className="card__duration">
                        <img className="card__icon" src={icon} alt="logo"></img>
                        { convertDuration(durationFirstTicket) }
                    </p>
                    <div className="card__time-info">
                            <p className="card__time">
                                <span className="card__date">{ formatDate(arrivalDateFirstTicket) }</span>
                                { getTimeFromDate(arrivalDateFirstTicket) }
                            </p>
                    </div>    
                </div>
                <div className="card__quantity-transfer">
                    <p className={isDirectFirstTicket ? 'card__quantity-transfers-num' : 'card__quantity-transfers-num card__quantity-transfers-num_visible'}>
                        1 пересадка
                    </p>
                </div>
                <p className="card__airline-name">Рейс выполняет: { airlineFirstTicket }</p>
            </div>

            {/* билет обратно Лондон-Москва */}
            <div className="card__arrival-flight">
                <div className="card__direction-info">
                    <h3 className="card__city">
                        { departureCitySecondTicket }, { departureAirportSecondTicket }
                        <span className="card__airport-code">&nbsp;({ departureAirportCodeSecondTicket })</span>
                    </h3>
                    <div className="card__arrow">&#10230;</div>
                    <h3 className="card__city card__city_type_arrival">
                        { arrivalCitySecondTicket }, { arrivalAirportSecondTicket }
                        <span className="card__airport-code">&nbsp;({ arrivalAirportCodeSecondTicket })</span>
                    </h3>
                </div>
                <div className="card__time-container">
                    <div className="card__time-info">
                        <p className="card__time">
                            { getTimeFromDate(departureDateSecondTicket) }
                            <span className="card__date">{ formatDate(departureDateSecondTicket) }</span>
                        </p>
                    </div>
                    <p className="card__duration">
                        <img className="card__icon" src={icon} alt="logo"></img>
                        { convertDuration(durationSecondTicket) }
                    </p>
                    <div className="card__time-info">
                        <p className="card__time">
                            <span className="card__date">{ formatDate(arrivalDateSecondTicket) }</span>
                            { getTimeFromDate(arrivalDateSecondTicket) }
                        </p>
                    </div>
                </div>
                <div className="card__quantity-transfer">
                    <p className={isDirectSecondTicket ? 'card__quantity-transfers-num' : 'card__quantity-transfers-num card__quantity-transfers-num_visible'}>
                        1 пересадка
                    </p>
                </div>
                <p className="card__airline-name">Рейс выполняет: {airlineSecondTicket}</p>
            </div>
            <button className="card__button" type="button">Выбрать</button>
        </article>
    )
}