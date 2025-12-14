import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout Components */
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Activities from "./pages/Activities";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

/* Theme Hook */
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <Router>
        {/* Header */}
        <Header theme={theme} toggleTheme={toggleTheme} />

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
