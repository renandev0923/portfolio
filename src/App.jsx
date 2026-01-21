import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ThemeInit } from "../.flowbite-react/init";
// import About from './pages/About.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeInit />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
