import logo from './logo.svg';
import './App.css';
import Navigation_bar from './Components/Navigation_bar';
import Hero from './Sections/Hero/Hero';
import Forms from './Sections/Forms/Forms';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='background-image'>
        <Navigation_bar />
        <Hero />
      </div>

      <Forms/>
      <Footer/>
    </div>
  );
}

export default App;
