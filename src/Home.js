import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container home-container mt-5">
        <div className="row justify-content-between">

          <div className='col-9 home-img-row'>
            <div className="display-6 fw-bold">Hi, I am Raymond Ng!</div>
            <div className="">Welcome to my portfolio page!</div>
           

            <p className="motto justify-content-start">
              "What you desperately learn becomes your talent."
            </p>
            <p className='d-flex justify-content-between'>
              <span></span> <em>--FULLMETAL ALCHEMIST</em>
            </p>
            <p className="motto justify-content-start">
              "自分が必死に学習したことが才能になる"
            </p>
            <p className='d-flex justify-content-between'>
              <span></span> <em>--鋼の錬金術師</em>
            </p>
          </div>

          <div className='col-md-3 d-none d-sm-block home-img-row '>
            <img className='img-fluid home-img-1' src={process.env.PUBLIC_URL + "/images/home char.png"} alt="" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
