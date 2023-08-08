import logo from './logo.svg';
import './App.scss';
import Navigation_bar from './Components/NavBar/Navigation_bar';
import Hero from './Sections/Hero/Hero';
import Forms from './Sections/Forms/Forms';
import Footer from './Components/Footer/Footer';
import AboutMe from './Sections/AboutMe/AboutMe' 


// Pages
import Home from "./Pages/Home.js"
import About from "./Pages/About.js"
import Appointment from './Pages/Appointment';
import Policies from './Pages/Policies';
import Services from './Pages/Services';
import OurTeam from './Pages/OurTeam';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  // const basename = '/your-base-url';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Our Team" element={<OurTeam />} />
      </Routes>
    </Router>
  );
    



    // <div className="App">
    //   <div className='background-image'>
    //     <Navigation_bar />
    //     <Hero />
    //   </div>

    //   <AboutMe/>
    //   {/* <Services/>
    //   <Forms/>
    //   <Footer/> */}
    // </div>
  // );
}

export default App;
