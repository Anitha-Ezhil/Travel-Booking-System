import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Packages.css';

const packages = [
  {
    id: 1,
    name: 'Experience the Great Holiday on Beach',
    description: 'The waves of the sea help me get back to me.',
    duration: '7D/6N',
    people: 10,
    location: 'Malaysia',
    price: 750,
    reviews: 25,
    image: 'beach.jpeg'
  },
  {
    id: 2,
    name: 'Summer Holiday to the Oxolotan River',
    description: 'A RIVER CUTS THROUGH ROCK, NOT BECAUSE OF ITS POWER, BUT BECAUSE OF ITS PERSISTENCE',
    duration: '5D/4N',
    people: 8,
    location: 'Mexico',
    price: 520,
    reviews: 20,
    image: 'two.jpg'
  },
  {
    id: 3,
    name: 'Adventure in the Rocky Mountains',
    description: 'Our peace shall stand as firm as rocky mountains.',
    duration: '10D/9N',
    people: 15,
    location: 'Canada',
    price: 950,
    reviews: 30,
    image: 'three.avif'
  },
  {
    id: 4,
    name: 'Cultural Tour in Kyoto',
    description: 'It was the birthplace of the characteristic culture of Japan.',
    duration: '4D/3N',
    people: 5,
    location: 'Japan',
    price: 400,
    reviews: 40,
    image: 'four.webp'
  },
  {
    id: 5,
    name: 'Safari in Serengeti',
    description: 'There is no wifi on safari but you will find a better connection.',
    duration: '7D/6N',
    people: 12,
    location: 'Tanzania',
    price: 1500,
    reviews: 35,
    image: 'five.jpg'
  },
  {
    id: 6,
    name: 'Exploring the Fjords of Norway',
    description: 'Norway vibes and good times ahead.',
    duration: '6D/5N',
    people: 8,
    location: 'Norway',
    price: 1300,
    reviews: 22,
    image: 'six.jpg'
  },
  {
    id: 7,
    name: 'Historical Journey through Rome',
    description: 'Rome will exist as long as the Coliseum does.',
    duration: '5D/4N',
    people: 10,
    location: 'Italy',
    price: 600,
    reviews: 18,
    image: 'seven.webp'
  },
  {
    id: 8,
    name: 'Relaxing Retreat in Bali',
    description: 'Finding Balance, Awakening the Chakras.',
    duration: '8D/7N',
    people: 10,
    location: 'Indonesia',
    price: 850,
    reviews: 28,
    image: 'eight.jpg'
  },
  {
    id: 9,
    name: 'Island Hopping in the Philippines',
    description: 'Life is good, but island life is better.',
    duration: '9D/8N',
    people: 15,
    location: 'Philippines',
    price: 900,
    reviews: 32,
    image: 'nine.jpg'
  },
  {
    id: 10,
    name: 'Wine Tasting in Bordeaux',
    description: 'For when the wine is in, the wit is out.',
    duration: '3D/2N',
    people: 6,
    location: 'France',
    price: 300,
    reviews: 15,
    image: 'ten.jpg'
  }
];

const Packages = () => {
  const navigate = useNavigate();

  const handleBookNow = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="packages">
      <h2>Popular Packages</h2>
      <h3>Checkout Our Packages</h3>
      <div className="package-list">
        {packages.map(pkg => (
          <div key={pkg.id} className="package">
            <img src={`/images/${pkg.image}`} alt={pkg.name} />
            <div className="package-details">
              <h4>{pkg.name}</h4>
              <p>{pkg.description}</p>
              <div className="package-info">
                <span>{pkg.duration}</span>
                <span>pax: {pkg.people}</span>
                <span>{pkg.location}</span>
              </div>
              <div className="package-price">
                <p>${pkg.price} / per person</p>
                <p>({pkg.reviews} reviews)</p>
                <button onClick={() => handleBookNow(pkg.id)}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
