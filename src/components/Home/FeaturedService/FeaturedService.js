import React from 'react';
import feature from '../../../images/feature.png'
const FeaturesService = () => {
  return (
    < section className = "features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <img className="img-fluid" src={feature} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h2>Exceptional Dental <br /> Care, on your Term</h2>
            <p className="text-secondary my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores nam mollitia suscipit. Aut, tenetur. Laborum alias doloremque velit eaque sint dolore incidunt, blanditiis quae commodi facere. Modi, placeat dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus unde ducimus officia minus, sed alias velit? Dolore provident natus consequatur ex fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi eligendi alias, quis blanditiis aliquam minus accusantium ratione debitis dolores atque magni explicabo consequuntur eaque officiis. Laborum mollitia error nam. eos dicta quo illum, eius, harum repellat sunt! </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesService;