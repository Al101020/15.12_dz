import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

import Loader from './Loader';


function Services() {
  // const servicesState = props
  
  const storage = useSelector((state) => state.storage);
  console.log(storage.services);
  // if (storage.services[0]) {
  //   console.log(storage.services[0].id);
  // };

  // let keyId = 1;

  if (storage.services.length === 0) {
    return (
      <h2>Список услуг:</h2>
    )
  };

  return (
    <>
      <h2>Список услуг:</h2>
      <ul>
        {storage.services.map((service) => (
          <>
            <li key={service.id} className='service'></li>
          </>
        ))}
      </ul>
    </>
  ); 
};

export default Services;