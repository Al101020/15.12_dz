import { useSelector } from 'react-redux';

import Loader from './Loader';


function Services() {
  
  const storage = useSelector((state) => state.storage);
  console.log(storage.services);

  if (storage.services.length === 0) {
    return (
      <>
        <h2>Список услуг:</h2>
        <div><img src='../src/assets/spinner.png'></img></div>
        {/* <div><img src='../assets/spinner.png'></img></div> */}
      </>
    )
  };

  return (
    <>
      <h2>Список предлагаемых услуг:</h2>
      <ul> 
        {storage.services.map(service => (
          <li key={service.id} className='service'>
            
            <span className='displayNone'>{service.id} - </span>
            <a href="#"><div className='name'>{service.name}</div></a>
            
            <div className='price'>{service.price}</div>
          </li>
        ))}
      </ul>
    </>
  ); 
};

export default Services;