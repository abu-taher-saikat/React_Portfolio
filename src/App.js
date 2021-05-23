import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Hero from './Sections/Hero';
import Service from './Sections/Service';
import Work from './Sections/Work';
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
    </div>
  );
}

export default App;
