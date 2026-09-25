import { useSelector, useDispatch } from 'react-redux';
import { servicesUploadRequest } from '../actions/actionCreators';

import { useEffect } from 'react';

export default function Services() {
  const {services, isLoading, isError, error} = useSelector((state) => state.storage);
  // console.log(services);
  // console.log(isLoading);
  // console.log(isError);
  // console.log(error);

  const dispatch = useDispatch()

  useEffect(() => {
    // Код побочного эффекта
    dispatch(servicesUploadRequest());
  }, []); // При загрузке

  // useEffect(() => {
  //   // Код побочного эффекта
  //   console.log(isLoading);
  //   if (isLoading === true) {
  //     console.log('isLoading = true');
  //   };
  //   if (isLoading !== true) {
  //     console.log('isLoading != true');
  //   }
  // }, [isLoading]); // При изменении isLoading

  useEffect(() => {
    // Код побочного эффекта изменения 'services'
    console.log(services);
    // if (services.length === 0) {
    //   console.log('services = []');
    // };
    if (services.length !== 0) {
      console.log('services != []');
    }
  }, [services]); // При изменении services

};




  // const state = useSelector((state) => state.storage);
  // console.log(state);

 // const storage = useSelector((state) => state.storage);
  // console.log(storage.services);

  // if (storage.services.length === 0) {
  //   return (
  //     <>
  //       <h2>Список услуг:</h2>
  //       <div><img src='../src/assets/spinner.png'></img></div>
  //       {/* <div><img src='../assets/spinner.png'></img></div> */}
  //     </>
  //   )
  // };

  // return (
  //   <>
  //     <h2>Список предлагаемых услуг:</h2>
  //     <ul> 
  //       {storage.services.map(service => (
  //         <li key={service.id} className='service'>
            
  //           <span className='displayNone'>{service.id} - </span>
  //           <a href="#"><div className='name'>{service.name}</div></a>
            
  //           <div className='price'>{service.price}</div>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // ); 
// export default Services;