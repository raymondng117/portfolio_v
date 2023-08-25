import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container home-container mt-5">
        <div className="row justify-content-between">

          <div className='col-7 home-img-row '>
            <div className="display-6">Hi there, I am Raymond Ng! </div>
          </div>

          <div className='col-3 home-img-row '>
            <img className='img-fluid home-img-1' src={process.env.PUBLIC_URL + "/images/home char.png"} alt="" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
