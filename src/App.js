import "./App.css";
import TopBar from "./Components/NavBar";
import Blog from "./Sections/Blog/Blog.js";
import Hero from "./Sections/Hero";
import Reviews from "./Sections/Reviews";
import Service from "./Sections/Service";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <TopBar />
      <Service />
      <Blog />
      <Reviews />
    </div>
  );
}

export default App;
