import React from 'react';

import flightsData from '../../data/flights.json';

import './App.css';

import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

function App() {

  // legs - массив из 2 маршрутов- туда и обратно (есть у каждого билета).
  // segments - массив из перелетов по одному маршруту (1 или 2 перелета), если перелет 1- маршрут прямой.
  // На маршруте возможна 1 пересадка, но Город вылета первого билет всегда Москва, город прилета первого билета всегда Лондон.
  // Город вылета второго билета всегда Лондон, город прилета второго билета всегда Москва.

  // *** при монтировании приложения стейт ticketsToShow получает массив в зависимости от диапозона выставленной цены 
  // (изначально от 0 до 10000, а значит массив пустой, т.к. в приходящих данных нет билетов с ценой до 10000).

  // *** стейт ticketsToShow изменяется только в зависимости от значений инпутов цен. Чекбокс пересадок и радиокнопки сортировки стейт не меняют.

  // *** проверка по наличию пересадок происходит в компоненте FlightList

  // приходящие данные
  const initialFlightData = flightsData.result.flights;

  // стейт отфильтрованного массива по цене
  const [ticketsToShow, setTicketsToShow] = React.useState(initialFlightData);

  // стейт кол-ва отображаемых билетов
  // для проверки приложения можно начальный стейт установить на 313 - длина приходящего массива
  const [visibleTickets, setVisibleTickets] = React.useState(5);

  // стейт чекбокса без пересадок
  const [noStopsChecked, setNoStopsChecked] = React.useState(false);
  // стейт чекбокс с 1 пересадкой 
  const [oneStopChecked, setOneStopChecked] = React.useState(false);

  // стейт инпутов цены от и до
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(10000);

  // стейт радиокнопки (может быть ascendingPrice, descendingPrice, duration)
  const [radioState, setRadioState] = React.useState('ascendingPrice');

  // возвращает массив, отсортированный по радиокнопке и отфильтрованный по диапозону цен
  const filteredByPriceRange = React.useMemo(() => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    let sortedArray = [...initialFlightData];

    // сортировка по возрастанию цены
    if(radioState === 'ascendingPrice') {
      sortedArray = sortedArray.sort(
        (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
      );
    } 
    // сортировка по убыванию цены
    else if(radioState === 'descendingPrice') {
      sortedArray = sortedArray.sort(
        (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
      );
    }
    // сортировка по общему времени в пути туда и обратно
    else if(radioState === 'duration') {
      sortedArray = sortedArray.sort(
        (a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration)
      )
    }
    
    // возвращает массив с диапозоном цен от до
    return sortedArray.filter((ticket) => {
      const price = ticket.flight.price.total.amount;
      return (!min || price >= min) && (!max || price <= max);
    });
  }, [minPrice, maxPrice, radioState]);
  
  // при каждом изменении массива рендерит его заново
  React.useEffect(() => {
    setTicketsToShow(filteredByPriceRange);
  }, [filteredByPriceRange]);

  // изменение стейта чекбокса без пересадок
  function handleNoStopsChecked() {
    setNoStopsChecked(!noStopsChecked);
  }

  // изменение стейта чекбокса с 1 пересадкой
  function handleOneStopChecked() {
    setOneStopChecked(!oneStopChecked);
  }

  // функция для изменения состояния радиокнопки
  function handleRadioStateChange(evt) {
    setRadioState(evt.target.value);
  }

  // функция для увеличения кол-ва отображаемых билетов
  // срабатывает при нажатии кнопки "Показать еще"
  function updateVisibleTickets() {
    setVisibleTickets(visibleTickets + 5);
  }

  return (
    <>
      {/* <Header></Header> */}
      <MainPage 
        ticketsToShow={ ticketsToShow }
        visibleTickets={ visibleTickets }
        updateVisibleTickets={ updateVisibleTickets }

        // 
        handleRadioStateChange={ handleRadioStateChange }

        // стейт чекбоксов пересадок и их сеттеры
        noStopsChecked={ noStopsChecked }
        oneStopChecked={ oneStopChecked }
        handleNoStopsChecked={ handleNoStopsChecked }
        handleOneStopChecked={ handleOneStopChecked }

        setMinPrice={ setMinPrice }
        setMaxPrice={ setMaxPrice }

      />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
