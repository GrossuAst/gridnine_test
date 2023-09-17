import React from "react";

import './Filter.css';

export default function Filter({ 
    ticketsToShow,

    filteringByDuration, 
    filteringByAscendingPrice, 
    filteringByPriceDescending,

    handleRadioStateChange,
    handleNoStopsChecked,
    handleOneStopChecked,

    setMinPrice,
    setMaxPrice,

    oneStopChecked,
    noStopsChecked,

    airlinesChecked,
    handleAirlineCheck,
    // airlines,
}) {

    // стейт для отображения списка авиакомпаний
    const [airlinesList, setAirlinesList] = React.useState(ticketsToShow);
    React.useEffect(() => {

        const filteredAirlines = ticketsToShow.filter((ticket) => {
            // проверка чекбоксов пересадок для отображения
            if (oneStopChecked && noStopsChecked) {
              return true;
            } else if (oneStopChecked) {
              return ticket.flight.legs.some((leg) => leg.segments.length === 2);
            } else if (noStopsChecked) {
              return ticket.flight.legs.every((leg) => leg.segments.length === 1);
            }
            // по умолчинию возвращает все авиакомпании
            return true; 
        });

        // 
        const uniqueAirlines = {};
        const uniqueAirlinesList = [];

        filteredAirlines.forEach((ticket) => {
            const airline = ticket.flight.carrier.caption;
            // если компании нет в списке уникальных, добавляю ее в uniqueAirlinesList
            if(!uniqueAirlines[airline]) {
                uniqueAirlines[airline] = true;
                uniqueAirlinesList.push(ticket);
            }
        })

        uniqueAirlinesList.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)

        // в стейт всегда попадают рейсы по возрастанию цены
        setAirlinesList(uniqueAirlinesList);

    }, [ticketsToShow, oneStopChecked, noStopsChecked]);

    return(
        <form className="filter">
            <div className="filter__container">
                <h3 className="filter__title">Сортировать</h3>
                <ul className="filter__list">
                    <li className="filter__list-item">
                        <label className="filter__list-label" onClick={ filteringByAscendingPrice }>
                            <input 
                                className="filter__list-radio" type="radio" name="price-radio" value='ascendingPrice' defaultChecked onChange={ handleRadioStateChange }
                            />
                            &nbsp;- по возрастанию цены
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label" onClick={ filteringByPriceDescending }>
                            <input className="filter__list-radio" type="radio" name="price-radio" value='descendingPrice' onChange={ handleRadioStateChange } />
                            &nbsp;- по убыванию цены
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label" onClick={ filteringByDuration }>
                            <input className="filter__list-radio" type="radio" name="price-radio" value='duration' onChange={ handleRadioStateChange } />
                            &nbsp;- по времени в пути
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter__container">
                <h3 className="filter__title">Фильтровать</h3>
                <ul className="filter__list">
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            <input 
                                className="filter__list-checkbox" type="checkbox" name="transfer-checkbox" value='1 пересадка' id="oneStopCheckbox" 
                                onClick={ handleOneStopChecked }
                            />
                            &nbsp;- 1 пересадка
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            <input 
                                className="filter__list-checkbox" type="checkbox" name="transfer-checkbox" value='без пересадок'
                                onClick={ handleNoStopsChecked }
                            />
                            &nbsp;- без пересадок
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter__container">
                <h3 className="filter__title">Цена</h3>
                <ul className="filter__list filter__list_type_price-range">
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            От
                            <input className="filter__price-range" defaultValue={0} onChange={(e) => setMinPrice(e.target.value)} ></input>
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            До
                            <input className="filter__price-range" defaultValue={10000} onChange={(e) => setMaxPrice(e.target.value)} ></input>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter__container">
                <h3 className="filter__title">Авиакомпании</h3>
                <ul className="filter__list">
                    {
                        airlinesList.map((ticket) => 
                            <li key={ ticket.flightToken } className="filter__list-item">
                                <label className="filter__list-label filter__list-label_type_airlines">
                                    <input className="filter__list-checkbox" type="checkbox" 
                                        value={ ticket.flight.carrier.caption }
                                        checked={ airlinesChecked.includes(ticket.flight.carrier.caption) }
                                        onChange={ (e) => handleAirlineCheck(e, ticket.flight.carrier.caption) }
                                    ></input>
                                    <span className="filter__airline">
                                        &nbsp;- { ticket.flight.carrier.caption }
                                    </span>
                                    <span className="filter__ticket-price">от { ticket.flight.price.total.amount } р.</span>
                                </label>
                            </li>
                        )
                    }
                    {/* <li  className="filter__list-item">
                        <label className="filter__list-label filter__list-label_type_airlines">
                            <input className="filter__list-checkbox" type="checkbox"></input>
                            <span className="filter__airline">
                            &nbsp;- LOT Polish Airlines
                            </span>
                            <span className="filter__ticket-price">от 21049 р.</span>
                        </label>
                    </li> */}
                </ul>
            </div>
        </form>
    )
}