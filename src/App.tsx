import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import ImageSlider from './components/scroller';
import StatsSection from './components/stats';
import WhyUs from './components/whyus';
import HowWeServe from './components/howweserve';
import BenefitsOfSolar from './components/Benifits';
import TestimonialPage from './components/Testimonial';
import LinkedInPosts from './components/Linkedin';
import PartnerLogos from './components/Partners';
import MapSection from './components/Location';
import Footer from './components/footer';
import AboutUsAndTeam from './components/Otherpages/Aboutus'; // Import the About Us component
import SavingsCalculator from './components/Otherpages/savingcalculator'; // Import the Savings Calculator component
import OurAssociates from './components/Otherpages/Associates'; // Import the Our Associates component
import WindEnergy from './components/Otherpages/WindEnergy';
import SuperIdeaPage from './components/Otherpages/superidea';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Router>
        {/* Navbar should always be visible */}
        <NavBar />

        {/* Main content changes based on route */}
        <div className="flex-grow"> {/* This ensures the content takes the full height */}
          <Routes>
            {/* Main page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ImageSlider />
                  <StatsSection />
                  <WhyUs />
                  <HowWeServe />
                  <BenefitsOfSolar />
                  <TestimonialPage />
                  <LinkedInPosts />
                  <PartnerLogos />
                  <MapSection />
                </>
              }
            />

            {/* About Us page */}
            <Route path="/about-us" element={<AboutUsAndTeam />} />

            {/* Savings Calculator page */}
            <Route path="/savings-calculator" element={<SavingsCalculator />} />

            {/* Our Associates page */}
            <Route path="/our-associates" element={<OurAssociates />} />
          
            {/* Wind Energy page */}
            <Route path="/wind-energy" element={<WindEnergy />} />

            {/* Super Idea Page */}
            <Route path="/super-idea" element={<SuperIdeaPage />} />
          </Routes>
        </div>

        {/* Footer should always be visible */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;