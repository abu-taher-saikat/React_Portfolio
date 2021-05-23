import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Contact from './Sections/Contact';
<<<<<<< HEAD

=======
>>>>>>> 63c087dc43e511fd58ed0a5e9e91da2ca36b0f27
import Hero from './Sections/Hero';
import Service from './Sections/Service';
import Work from './Sections/Work';
import Experience from "./Components/Experience";
import HireMe from "./Sections/HireMe";
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
        <Reviews />
        <Experience />
        <Contact/>
        <Experience />
        <HireMe />
    </div>
  );
}

export default App;
