import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// STYLES
import "../src/styles/App.scss";

// IMPORTS

// PAGES AND COMPONENTS
import Navbar from "./components/navBar/Navbar";
import CoverBank from "./pages/cover-bank/CoverBank";
import About from "./pages/about/About";
import SingleCover from "./pages/single-cover/SingleCover";
import Footer from "./components/footer/Footer";

function App() {
  const [isScrollable, setIsScrollable] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/about") {
      setIsScrollable(true);
    }
  }, [pathname]);

  return (
    <div className={isScrollable ? "App" : " hideScroll"}>
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

      <Footer />
    </div>
  );
}

export default App;
