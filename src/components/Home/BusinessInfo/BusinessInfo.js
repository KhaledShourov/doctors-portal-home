import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
const infoData =[
  {
    title: 'Opening Hour',
    description:'We are open 7 days',
    icon: faClock,
    background:'primary'
  }, {
    title: 'Visit our Location',
    description: 'Brooklyn, NY, 10100 USA',
    icon: faMapMarker,
    background: 'dark'
  },
   {
     title: 'Call us now',
     description: '+188884834827',
     icon: faPhone,
     background: 'primary'
   }
]
const BusinessInfo = () => {
  return (
    <section className ="d-flex justify-content-center">
      <div className="w-75 row">
        {
        infoData.map(info=> <InfoCard info={info}></InfoCard>)
      }
      </div>
    </section>
  );
};

export default BusinessInfo;