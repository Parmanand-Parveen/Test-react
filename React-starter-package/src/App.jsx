import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/:id" element={<Details/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
