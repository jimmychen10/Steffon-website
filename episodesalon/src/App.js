import logo from './logo.svg';
import './App.css';
import Navigation_bar from './Components/Navigation_bar';
import Hero from './Sections/Hero/Hero';
import Forms from './Sections/Forms/Forms';


function App() {
  return (
    <div className="App">
      <Navigation_bar/>
      <Hero/>
      <Forms/>
    </div>
  );
}

export default App;
