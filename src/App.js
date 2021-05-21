import './App.css';
import TopBar from './Components/NavBar';
import Hero from './Sections/Hero';
import Service from './Sections/Service';

function App() {
  return (
    <div className="App">
        <TopBar />
        <Hero></Hero>
        <Service/>
    </div>
  );
}

export default App;

