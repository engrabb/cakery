import React from 'react';
import './Home.css';
import munamiImage from '../images/munami.png';

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
        <img src={munamiImage} alt="Cake" className="styled-image" />
        <h1>Welcome to Munamii Cakery!</h1>

      </div>
    </div>
  );
};

export default Home;