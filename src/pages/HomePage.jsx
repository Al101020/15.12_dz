import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchServices from '../api/fetchServices';

const HomePage = () => {
  return (
    <>
      <h1>Home page - Услуги их цена</h1>
      <div id='services'></div>
    </>
  );
};

export default HomePage;
