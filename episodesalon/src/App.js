import logo from './logo.svg';
import './App.scss';
import Navigation_bar from './Components/NavBar/Navigation_bar';
import Hero from './Sections/Hero/Hero';
import Forms from './Sections/Forms/Forms';
import Footer from './Components/Footer/Footer';
import AboutMe from './Sections/AboutMe/AboutMe' 
import Services from './Sections/Services/Services';

import Home from "./Pages/Home.js"



// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  // const basename = '/your-base-url';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
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
