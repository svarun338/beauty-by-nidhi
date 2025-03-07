import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader"; // Import the custom loader

// Lazy-loaded components
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));
const Profile = lazy(() => import("./components/Profile"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
