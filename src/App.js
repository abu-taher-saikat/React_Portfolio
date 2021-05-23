import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
<<<<<<< HEAD
import Contact from './Sections/Contact';

=======
import Hero from './Sections/Hero';
import Service from './Sections/Service';
import Work from './Sections/Work';
import Reviews from "./Sections/Reviews";
>>>>>>> 9986da98c8b7e52fd417d4f0523b68aae7d659b6

function App() {
  return (
    <div className="App">
        <Hero></Hero>
        <TopBar />
        <Service/>
        <Work />
        <Blog/>
<<<<<<< HEAD
        <Contact/>
=======
        <Reviews />
>>>>>>> 9986da98c8b7e52fd417d4f0523b68aae7d659b6
    </div>
  );
}

export default App;
