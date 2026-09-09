import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchServices from '../api/fetchServices';

const HomePage = () => {

  useEffect(() => {
    // Код побочного эффекта
    fetchServices;
  }, []);

  return (
    <>
      <h1>Home page - Список услуг и их цена</h1>
      <div id='services'></div>
    </>
  );
};

export default HomePage;
