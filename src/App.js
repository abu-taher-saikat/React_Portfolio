import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Contact from './Sections/Contact';

import Hero from './Sections/Hero';
import Service from './Sections/Service';
import Work from './Sections/Work';
import Reviews from "./Sections/Reviews";
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">
        <Hero></Hero>
        <TopBar />
        <Service/>
        <Work />
        <Blog/>
        <Contact/>
        <Reviews />
        <Footer/>
    </div>
  );
}

export default App;
