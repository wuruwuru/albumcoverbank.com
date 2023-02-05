// STYLES
import "./App.css";

// IMPORTS
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// required imports for the nav menu icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// PAGES AND COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import CoverBank from "./pages/cover-bank/CoverBank";
import About from "./pages/about/About";
import Stories from "./pages/stories/Stories";
import SingleCover from "./pages/cover-bank/SingleCover";

library.add(fas);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cover-bank" element={<CoverBank />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/cover-bank/:id" element={<SingleCover />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
