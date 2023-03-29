import { useState } from "react";

// STYLES
import "../src/styles/App.scss";

// IMPORTS
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// PAGES AND COMPONENTS
import Navbar from "./components/navBar/Navbar";
import CoverBank from "./pages/cover-bank/CoverBank";
import About from "./pages/about/About";
import SingleCover from "./pages/single-cover/SingleCover";
import Footer from "./components/footer/Footer";

function App() {
  const [isScrollable, setIsScrollable] = useState(true);
  return (
    <div className={isScrollable ? "App" : " hideScroll"}>
      <BrowserRouter>
        <Navbar />
        <div className="App-container">
          <Routes>
            <Route
              exact
              path="/"
              element={<CoverBank setIsScrollable={setIsScrollable} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/cover-bank/:id" element={<SingleCover />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
