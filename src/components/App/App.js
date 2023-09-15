import React from 'react';

import flightsData from '../../data/flights.json';

import './App.css';

import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

function App() {

  // legs - массив из 2 маршрутов- туда и обратно (есть у каждого билета)
  // segments - массив из перелетов по одному маршруту (1 или 2 перелета), если перелет 1- маршрут прямой
  // На маршруте возможна 1 пересадка, но Город вылета первого билет всегда Москва, город прилета первого билета всегда Лондон
  // Город вылета второго билета всегда Лондон, город прилета второго билета всегда Москва

  // стейт приходящих данных
  const [initialFlightData, setinitialFlightData] = React.useState(flightsData.result.flights);
  // стейт отфильтрованного массива по цене
  const [ticketsToShow, setTicketsToShow] = React.useState([]);
  // стейт кол-ва отображаемых билетов
  const [visibleTickets, setVisibleTickets] = React.useState(5);

  console.log(ticketsToShow);

  // фильтрация по времени. Сначала наиболее короткие
  function filteringByDuration() {
    const filtredArray = [...initialFlightData];
    // фильтр только по времени туда. Чтобы включить, нужно расскоментить строку ниже и закомментить фильтр по общему времени в пути
    // filtredArray.sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration);
    // фильтр по общему времени в пути туда и обратно
    filtredArray.sort((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
    setTicketsToShow(filtredArray);
  }

  // фильтрация по возрастанию цены, срабатывает при монтировании приложения
  function filteringByAscendingPrice() {
    const filtredArray = [...initialFlightData];
    filtredArray.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
    setTicketsToShow(filtredArray);
  };

  // фильтрация по убыванию цены
  function filteringByPriceDescending() {
    const filtredArray = [...initialFlightData];
    filtredArray.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
    setTicketsToShow(filtredArray);
  }

  // функция для увеличения кол-ва отображаемых билетов
  function updateVisibleTickets() {
    setVisibleTickets(visibleTickets + 5);
  }
  
  // при монтировании приложения фильтрует билеты по возрастанию цены
  React.useEffect(() => {
    filteringByAscendingPrice();
  }, []);

  return (
    <>
      {/* <Header></Header> */}
      <MainPage 
        ticketsToShow={ ticketsToShow }
        visibleTickets={ visibleTickets }
        updateVisibleTickets={ updateVisibleTickets }
        filteringByDuration={ filteringByDuration }
        filteringByAscendingPrice={ filteringByAscendingPrice }
        filteringByPriceDescending={ filteringByPriceDescending }
      />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
