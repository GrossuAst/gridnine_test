import React from 'react';

import flightsData from '../../data/flights.json';

import './App.css';

import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

function App() {

  // legs - массив из 2 маршрутов- туда и обратно (есть у каждого билета)
  // segments - массив из перелетов по одному маршруту (1 или 2 перелета), если перелет 1- маршрут прямой

  // стейт приходящих данных
  const [initialFlightData, setinitialFlightData] = React.useState(flightsData.result.flights);
  // стейт отфильтрованного массива по цене
  const [fitlredArrayByPrice, setfitlredArrayByPrice] = React.useState([]);
  // стейт кол-ва отображаемых билетов
  const [visibleTickets, setVisibleTickets] = React.useState(5);

  // фильтрация по возрастанию цены, срабатывает при монтировании приложения
  function filteringByAscendingPrice() {
    const filtredArray = [...initialFlightData];
    filtredArray.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
    // const filtredArray = initialFlightData.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount);
    setfitlredArrayByPrice(filtredArray);
  };

  // фильтрация по убыванию цены
  function filteringByPriceDescending() {
    const filtredArray = [...initialFlightData];
    filtredArray.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
    // const filtredArray = initialFlightData.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount);
    setfitlredArrayByPrice(filtredArray);
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
        fitlredArrayByPrice={ fitlredArrayByPrice }
        visibleTickets={ visibleTickets }
        updateVisibleTickets={ updateVisibleTickets }
        filteringByAscendingPrice={ filteringByAscendingPrice }
        filteringByPriceDescending={ filteringByPriceDescending }
      />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
