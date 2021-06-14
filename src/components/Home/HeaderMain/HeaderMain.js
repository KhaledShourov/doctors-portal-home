import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
  return (
    <main className="row d-flex align-items-center my-5">
      <div className="col-md-4 offset-1">
        <h1 style={{color:'#3a4256'}}>Your New Smile <br /> Start Here</h1>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad consectetur delectus, explicabo iure nesciunt!</p>
        <button className="btn btn-primary">GRT APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;