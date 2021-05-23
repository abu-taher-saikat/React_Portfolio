import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Hero from './Sections/Hero';
import Service from './Sections/Service';

function App() {
  return (
    <div className="App">
        <Hero></Hero>
        <TopBar />
        <Service/>
        <Blog/>
    </div>
  );
}

export default App;

