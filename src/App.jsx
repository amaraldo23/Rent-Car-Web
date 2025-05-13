import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Pages/Home";
import CarDetails from "./Components/Pages/CarDetails";
import ElectricCars from './Components/CarCategory/ElectricCars'; 
import SUVCars from './Components/CarCategory/SUVCars';
import SportsCars from './Components/CarCategory/SportsCars';
import FamilyCars from './Components/CarCategory/FamilyCars';

const App = () => {
    let heroData = [
        { text1: "Dive into", text2: "what you love" },
        { text1: "Indulge", text2: "your passions" },
        { text1: "Give in to", text2: "your passions" },
    ];
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 3000);

        return () => clearInterval(interval); // Pastron intervalin kur komponenti unmount
    }, []);

    const handleNavigateToAbout = () => {
        navigate('/about');
    };

    const handleNavigateToContact = () => {
            navigate('/contact');
    };
    
    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar onAboutClick={handleNavigateToAbout} onContactClick={handleNavigateToContact} />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/car/:id" element={<CarDetails />} />
                <Route path="/electric" element={<ElectricCars />} />
                <Route path="/suv" element={<SUVCars />} />
                <Route path="/sports" element={<SportsCars />} />
                <Route path="/family" element={<FamilyCars />} />
            </Routes>
        </div>
    );
};

export default App;