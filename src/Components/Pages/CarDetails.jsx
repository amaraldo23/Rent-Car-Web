// src/pages/CarDetails.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Përdor useParams dhe Link për navigim
import './CarDetails.css'; // Importi stilizimit ne css
import Footer from '../Footer/footer';
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


import {Box,Grid} from '@mui/material/';

const CarDetails = () => {
  const { id } = useParams(); // Merr ID-në e makinës nga URL
  const [startDate, setStartDate] = useState(new Date()); // Data e fillimit
  const [endDate, setEndDate] = useState(new Date()); // Data e mbarimit

  const [value, setValue] = useState(dayjs('2022-04-17'));

  // Lista e makinave (mund të zëvendësohet me një API call në të ardhmen)
  const cars = [
    {
      id: 1,
      model: 'Mercedes Benz',
      image: car1,
      mileage: '12000 km',
      fuelType: 'Benzin',
      color: 'E bardhë',
      description: 'Mercedes Benz është një makinë luksoze me performancë të lartë.',
      features: ['Klima automatik', 'Sistem audio premium', 'Kamera prapa'],
    },
    {
      id: 2,
      model: 'BMW M5 Competition',
      image: car2,
      mileage: '15000 km',
      fuelType: 'Naftë',
      color: 'E zezë',
      description: 'BMW M5 Competition është një makinë sportive me teknologji të avancuar.',
      features: ['Sistem çaktivizimi i stabilizimit', 'Transmission automatik', 'Sedilje sportive'],
    },
    {
      id: 3,
      model: 'Nissan GTR',
      image: car3,
      mileage: '15000 km',
      fuelType: 'Naftë',
      color: 'E zezë',
      description: 'Nissan GTR është një makinë sportive me performancë të jashtëzakonshme.',
      features: ['Motor V6', 'Sistem all-wheel drive', 'Sistem shpëtimi aktiv'],
    },
    {
      id: 4,
      model: 'Audi A7 Rrugaci',
      image: car4,
      mileage: '280,000 km',
      fuelType: 'Benzin–Gaz',
      color: 'Gri',
      description: 'Audi A7 është një makinë elegante dhe komode për përdorim të përditshëm.',
      features: ['Sistem infotainment me ekran të madh', 'Kamera 360°', 'Sistem parkimi automatik'],
    },
  ];

  // Gjej makinën bazuar në ID
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Makina nuk u gjet.</div>; // Nëse makina nuk ekziston
  }

  return (
    <div className="car-details-page">
      {/* Header */}
      <header className="car-header"></header>

      {/* Seksioni i Imazhit */}
      <section className="car-image-section">
        <img src={car.image} alt={car.model} />
      </section>

      <section>
        {/* Seksioni i Detajeve */}
        <div className="car-details-section">
          <h2>Detajet e Makinës</h2>
              <div className="detail-item">
                <p>Kilometrat:150 mije te kontralluara</p>
                <p>Lëndë djegëse: Nafte </p>
              </div>
        </div>

      {/* Seksioni i Rezervimit */}
          <div className="reservation-section">
            <h2>Rezervo Tani</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker','TimePicker']}>
                <Grid container>
                    <Grid size={8}>
                    <DatePicker
                        className='pick-car-date'
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        defaultValue={dayjs('2022-04-17')}
                      />
                    </Grid>
                    <Grid size={4}>
                        <TimePicker label="Basic time picker"  className='pick-car-time'/>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid size={8}>
                    <DatePicker
                        className='pick-car-date'
                        label="Controlled picker"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        defaultValue={dayjs('2022-04-17')}
                      />
                    </Grid>
                    <Grid size={4}>
                        <TimePicker label="Basic time picker"  className='pick-car-time'/>
                    </Grid>
                  </Grid>
                </DemoContainer>
              </LocalizationProvider>
              <button className='rent-button'> Rezevo tani</button>
          </div>
      </section>
      <div className='back-button'>
      <Link to="/"><button className='buttons'>Kthehu në Faqen Kryesore</button></Link>
      </div>
      <Footer/>
    </div>

    
  );
};

export default CarDetails;