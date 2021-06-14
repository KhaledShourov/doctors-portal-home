import React from 'react';
import fluoride from '../../../images/fluoride.png'
import whitening from '../../../images/whitening.png'
import cavity from '../../../images/cavity.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData =[
  {
    name: 'Fluoride Treatment',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    img: whitening
  }
]
const Services = () => {
  return (
   <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{color:'#1cc7c1'}}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div>
      <div className ="d-flex justify-content-center">
        <div className="w-75 row mt-4 pt-4">
          {
          serviceData.map(service=> <ServiceDetail service={service}></ServiceDetail>)
        }
        </div>
     </div>
      </div>
   </section>
  );
};

export default Services;