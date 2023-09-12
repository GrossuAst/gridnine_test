import React from 'react';

import flightsData from '../../data/flights.json';

import './App.css';

import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

function App() {

  console.log(flightsData);

  return (
    <>
      {/* <Header></Header> */}
      <MainPage></MainPage>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
