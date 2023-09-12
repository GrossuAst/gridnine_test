import React from "react";

import icon from '../../images/icon.png';
import './Card.css';

export default function Card() {
    return(
        <article className="card">
            <div className="card__header">
                <p className="card__airline-logo">Логотип</p>
                <p className="card__total-price">21049 Р<span className="card__total-price-description">Стоимость для одного взрослого пассажира</span></p>
            </div>
            <div className="card__departure-flight">
                <div className="card__direction-info">
                    <h3 className="card__city">Москва, ШЕРЕМЕТЬЕВО<span className="card__airport-code">&nbsp;(SVO)</span></h3>
                    <div className="card__arrow">&#10230;</div>
                    <h3 className="card__city">ЛОНДОН, Лондон, Хитроу<span className="card__airport-code">&nbsp;(LHR)</span></h3>
                </div>
                <div className="card__time-container">
                    <div className="card__time-info">
                            <p className="card__time">20:40<span className="card__date">18 авг. вт</span></p>
                    </div>
                    <p className="card__duration">
                        <img className="card__icon" src={icon} alt="logo"></img>
                        14 ч 45 мин
                    </p>
                    <div className="card__time-info">
                            <p className="card__time"><span className="card__date">19 авг. ср</span>09:25</p>
                    </div>    
                </div>
                <div className="card__quantity-transfer"></div>
                <p className="card__airline-name">Рейс выполняет: LOT Polish Airlines</p>
            </div>
            <div className="card__arrival-flight">
                <div className="card__direction-info">
                    <h3 className="card__city">ЛОНДОН, Лондон, Хитроу<span className="card__airport-code">&nbsp;(LHR)</span></h3>
                    <div className="card__arrow">&#10230;</div>
                    <h3 className="card__city">Москва, ШЕРЕМЕТЬЕВО<span className="card__airport-code">&nbsp;(SVO)</span></h3>
                </div>
                <div className="card__time-container">
                    <div className="card__time-info">
                            <p className="card__time">18:10<span className="card__date">19 авг. ср</span></p>
                    </div>
                    <p className="card__duration">
                        <img className="card__icon" src={icon} alt="logo"></img>
                        23 ч 35 мин
                    </p>
                    <div className="card__time-info">
                            <p className="card__time"><span className="card__date">20 авг. чт</span>19:45</p>
                    </div>
                </div>
                <div className="card__quantity-transfer"></div>
                <p className="card__airline-name">Рейс выполняет: LOT Polish Airlines</p>
            </div>
            <button className="card__button" type="button">Выбрать</button>
        </article>
    )
}