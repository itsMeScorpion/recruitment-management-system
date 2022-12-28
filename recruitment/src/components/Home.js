// home page

import React from 'react';
import Header from './Header';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div>
      {/* importing header to home page */}
      <Header />
      {/* home page carousel  */}

      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/human-resource-hand-with-magnifying-glass-chooses-candidate-from-group-employee-selection-recruitment-team-hiring-workers-future-success-career-choice-process-competition-vector-flat-concept_176411-2224.jpg?w=2000"
            alt="First slide"
            style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://continental-search.com/wp-content/uploads/2017/01/social_media_recruitment.png"
            alt="Second slide"
            style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://brightclean9.com/wp-content/uploads/2021/02/recruitment-strategies-1024x538-1.jpg"
            alt="Third slide"
            style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
