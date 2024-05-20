import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './Tour.css';

const toursData = [
  {
    id: 1,
    location: 'London',
    title: 'Westminster Bridge',
    price: 99,
    rating: 4.5,
    image: 'london.jpg',
  },
  {
    id: 2,
    location: 'Malaysia',
    title: 'Trip in Malaysia',
    price: 79,
    rating: 4.7,
    image: 'malaysia.jpg',
  },
  {
    id: 3,
    location: 'Delhi',
    title: 'Trip in Delhi',
    price: 149,
    rating: 4.8,
    image: 'delhi.jpg',
  },
  {
    id: 4,
    location: 'Paris',
    title: 'Trip in Paris',
    price: 199,
    rating: 4.9,
    image: 'paris.jpg',
  },
  {
    id: 5,
    location: 'Tokyo',
    title: 'Trip in Tokyo',
    price: 129,
    rating: 4.6,
    image: 'tokyo.jpg',
  },
];

const Tour = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const distance = searchParams.get('distance');
  const maxPeople = searchParams.get('maxPeople');
  const priceRange = searchParams.get('priceRange');

  const filteredTours = toursData.filter(tour => {
    return (
      (!location || tour.location.toLowerCase().includes(location.toLowerCase())) &&
      (!distance || parseInt(distance) >= 0) &&
      (!maxPeople || parseInt(maxPeople) >= 0) &&
      (!priceRange || parseInt(priceRange) >= tour.price)
    );
  });

  return (
    <div className="tour-container">
      <h2>Unlock Your Travel Dream With Us!!!</h2>
      <div className="tour-results">
        {filteredTours.length > 0 ? (
          filteredTours.map(tour => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.title} />
              <div className="tour-info">
                <h3>{tour.title}</h3>
                <p>{tour.location}</p>
                <p>Rating: {tour.rating} ★</p>
                <p>Price: ${tour.price} / per person</p>
                <Link to={`/booking/${tour.id}`} className="book-button">Book Now</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No tours found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Tour;
