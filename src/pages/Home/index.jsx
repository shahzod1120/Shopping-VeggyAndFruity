import React from 'react';
import Cards from '../../components/Cards';
import * as mdb from 'mdb-ui-kit'; 
import friuts from '../../assets/img/fruits.jpg'
import vegetables from '../../assets/img/vegetables.jpg'
import nuts from '../../assets/img/nuts.jpg'
import './style.scss'

const index = () => {

  return (
    <>
      <div className="sliders">
        <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel">
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100 position-relative">
              <h1 className='position-absolute text-white d-block py-3 px-5 text-center' style={{top:'10%', left:'50%', transform:'translate(-50%)', background:'rgba(0,0,0,0.5)',fontFamily: 'Edu QLD Beginner, cursive'}}>Nutritious Vegetables</h1>
              <img src={vegetables}  className="d-block w-100 h-100" alt="Camera" />
            </div>
            <div className="carousel-item ">
              <h1 className='position-absolute text-white d-block py-3 px-5 text-center' style={{top:'10%', left:'50%', transform:'translate(-50%)', background:'rgba(0,0,0,0.5)',fontFamily: 'Edu QLD Beginner, cursive'}}>Delicious Fruits</h1>
              <img src={friuts} className="d-block w-100 h-100" alt="Wild Landscape" />
            </div>
            <div className="carousel-item">
              <h1 className='position-absolute text-white d-block py-3 px-5 text-center' style={{top:'10%', left:'50%', transform:'translate(-50%)', background:'rgba(0,0,0,0.5)',fontFamily: 'Edu QLD Beginner, cursive'}}>Nuts full of vitamins</h1>
              <img src={nuts}  className="d-block w-100 h-100" alt="Exotic Fruits" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        <Cards />
      </div>
    </>
  );
};

export default index;