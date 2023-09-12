import React from "react";

import './Filter.css';

export default function Filter() {
    return(
        <form className="filter">
            <div className="filter__container">
                <h3 className="filter__title">Сортировать</h3>
                <ul className="filter__list">
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            <input className="filter__list-radio" type="radio" name="price-radio" value='по возрастанию цены' defaultChecked />
                            &nbsp;- по возрастанию цены
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            <input className="filter__list-radio" type="radio" name="price-radio" value='по убыванию цены' />
                            &nbsp;- по убыванию цены
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            <input className="filter__list-radio" type="radio" name="price-radio" value='по времени в пути' />
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
                            <input className="filter__list-checkbox" type="checkbox" name="transfer-checkbox" value='1 пересадка' />
                            &nbsp;- 1 пересадка
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            <input className="filter__list-checkbox" type="checkbox" name="transfer-checkbox" value='без пересадок' />
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
                            <input className="filter__price-range" defaultValue={0}></input>
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label">
                            До
                            <input className="filter__price-range" defaultValue={10000}></input>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="filter__container">
                <h3 className="filter__title">Авиакомпании</h3>
                <ul className="filter__list">
                    <li className="filter__list-item">
                        <label className="filter__list-label filter__list-label_type_airlines">
                            <input className="filter__list-checkbox" type="checkbox"></input>
                            <span className="filter__airline">
                            &nbsp;- LOT Polish Airlines
                            </span>
                            <span className="filter__ticket-price">от 21049 р.</span>
                        </label>
                    </li>
                    <li className="filter__list-item">
                        <label className="filter__list-label filter__list-label_type_airlines">
                            <input className="filter__list-checkbox" type="checkbox"></input>
                            <span className="filter__airline">
                                &nbsp;- Аэрофлот - российская компания 
                            </span>
                            <span className="filter__ticket-price">от 31733 р.</span>
                        </label>
                    </li>
                </ul>
            </div>
        </form>
    )
}