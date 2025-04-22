// src/pages/Home.jsx
import React from 'react';
import CarList from '../Carlist/CarList';
import Footer from '../Footer/footer';
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";

import category1 from "../../assets/veture.png";
import category2 from "../../assets/fuoristrade.png";
import category3 from "../../assets/sportive.png";
import category4 from "../../assets/familjare.png";
import CategoryList from "../Pages/CategoryList";

const Home = () => {
  const cars = [
    {
      id: 1,
      model: 'Mercedez Benz',
      image: car1,
      mileage: '12000',
      fuelType: 'Benzin',
      color: 'E bardhë',
    },
    {
      id: 2,
      model: 'BMW M5 Competition',
      image: car2,
      mileage: '15000',
      fuelType: 'Naftë',
      color: 'E zezë',
    },
    {
      id: 3,
      model: 'Nissan GTR',
      image: car3,
      mileage: '15000',
      fuelType: 'Naftë',
      color: 'E zezë',
    },
    {
      id: 4,
      model: 'Audi A7 Rrugaci',
      image: car4,
      mileage: '280,000',
      fuelType: 'Benzin-Gaz',
      color: 'Gri',
    },
    // Shtoni më shumë makina sipas nevojës
  ];

  const categories = [
    {
      id: 1,
      name: "Elektrike",
      description: "Makina elektrike e vecant per zgjedhjen qe do.",
      image: category1,
    },
    {
      id: 2,
      name: "Fuoristradë",
      description: "Për udhëtime të vështira dhe terrene malore.",
      image: category2,
    },
    {
      id: 3,
      name: "Sportive",
      description: "Shpejtësi dhe stil për adhuruesit e makinave.",
      image: category3,
    },
    {
      id: 4,
      name: "Familjare",
      description: "Komoditet dhe hapësirë për të gjithë familjen.",
      image: category4,
    },
  ];

  return (
    <div className="home-title">
      <h2>Top 4 most rented Cars</h2>
      <CarList cars={cars} />

      <h2 style={{ marginTop: '40px' }}>Kategoritë e Makinave</h2>
      <CategoryList categories={categories} />
      </div>
  );
};


<Footer/>

export default Home;