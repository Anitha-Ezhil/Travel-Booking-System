import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Services from './Services';
import About from './About';
import Tour from './Tour';
import BookingPage from './BookingPage';
import Login from './Login';
import Signup from './Signup';
import Packages from './Packages';
import Admin from './Admin';
import AddTour from './AddTour';
import AddPackages from './AddPackages';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="tour" element={<Tour />} />
          <Route path="booking/:id" element={<BookingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="packages" element={<Packages />} />
          <Route path="adminpage" element={<Admin />} />
          <Route path="adminpage/addtour" element={<AddTour />} />
          <Route path="adminpage/addpackages" element={<AddPackages />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
