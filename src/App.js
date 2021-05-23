import './App.css';
import TopBar from './Components/NavBar';
import Blog from './Sections/Blog/Blog.js';
import Contact from './Sections/Contact';


function App() {
  return (
    <div className="App">
        <TopBar />
        <Blog/>
        <Contact/>
    </div>
  );
}

export default App;

