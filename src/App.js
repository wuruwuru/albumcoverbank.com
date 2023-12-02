import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
// STYLES
import "../src/styles/App.scss";

// IMPORTS

// PAGES AND COMPONENTS
import Navbar from "./components/navBar/Navbar";
import CoverBank from "./pages/cover-bank/CoverBank";
import About from "./pages/about/About";
import SingleCover from "./pages/single-cover/SingleCover";
import Footer from "./components/footer/Footer";
import Funk from "./pages/funk/Funk";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <script
            defer
            data-domain="albumcoverbank.com"
            src="https://plausible.io/js/script.js"
          />
        </Helmet>
        <Navbar />
        <div className="App-container">
          <Routes>
            <Route exact path="/" element={<CoverBank />} />
            <Route path="/about" element={<About />} />
            <Route path="/cover-bank/:id" element={<SingleCover />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/funk" element={<Funk />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
