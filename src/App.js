import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Contact from './Sections/Contact';
import Hero from './Sections/Hero';
import Service from './Sections/Service';
import Work from './Sections/Work';
import Experience from "./Components/Experience";
import HireMe from "./Sections/HireMe";
import Reviews from "./Sections/Reviews";

function App() {
  return (
    <div className="App">
        <Hero></Hero>
        <TopBar />
        <Service/>
        <Work />
        <Blog/>
        <Reviews />
        <Experience />
        <Contact/>
        <Experience />
        <HireMe />
    </div>
  );
}

export default App;
