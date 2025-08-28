import React from 'react';
import CarCard from '../components/CarCard';
import { featuredCars } from '../data/cars';

// Home page showing featured cars
const Home = () => (
  <div>
    <h2>Featured Cars</h2>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Map through featured cars and show each in a card */}
      {featuredCars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  </div>
);

export default Home;
