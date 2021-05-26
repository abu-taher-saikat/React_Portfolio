import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Contact from './Sections/Contact';
<<<<<<< HEAD

=======
>>>>>>> 5c92bfa285333dc8a5f22ad83dc653af1da6aab1
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
        <Experience />
        <Work />
        <Reviews />
        <HireMe />
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
