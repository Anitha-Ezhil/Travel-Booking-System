import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const { id } = useParams();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/api/bookings/${id}`, {
        fullName,
        phone,
        date,
        numGuests,
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed!');
    }
  };

  return (
    <div className="booking-page">
      <h2>Book Your Tour</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Number of Guests:</label>
          <input type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} min="1" required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingPage;
