import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AddTourForm from './AddTour';
import TourTable from './TourTable';

const TourManagement = () => {
  const [tours, setTours] = useState([]);

  const handleAddTour = (newTour) => {
    setTours([...tours, newTour]);
  };

  const handleDeleteTour = (index) => {
    setTours(tours.filter((_, i) => i !== index));
  };

  const handleEditTour = (index) => {
    // You can implement edit functionality here
    console.log("Edit tour at index:", index);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/addtour" element={<AddTourForm onAddTour={handleAddTour} />} />
        <Route path="/tourtable" element={<TourTable tours={tours} onDeleteTour={handleDeleteTour} onEditTour={handleEditTour} />} />
      </Routes>
    </Layout>
  );
};

export default TourManagement;
