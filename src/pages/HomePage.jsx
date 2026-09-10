// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import fetchServices from '../api/fetchServices';

const HomePage = () => {

  // const dispatch = useDispatch();

  useEffect(() => {
    // Код побочного эффекта
    // dispatch(fetchServices());
    fetchServices();
  }, []);

  return (
    <>
      <h1>Home page - Список услуг и их цена</h1>
      <div id='services'></div>
    </>
  );
};

export default HomePage;
