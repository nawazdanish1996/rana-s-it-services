import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
const Home = lazy(()=> import("./pages/Home"))
const OurServices = lazy(()=> import("./pages/Our_Services"))
const About = lazy(()=> import("./pages/About"))
const Contact = lazy(()=> import("./pages/Contact"))
const NotFound = lazy(()=> import("./pages/NotFound"))

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Suspense fallback="Loading..."><Home /></Suspense>} />
        <Route path="/our_services" element={<Suspense fallback="Loading..."><OurServices /></Suspense>} />
        <Route path="/about" element={<Suspense fallback="Loading..."><About /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback="Loading..."><Contact /></Suspense>} />
        <Route path="*" element={<Suspense fallback="Loading..."><NotFound /></Suspense>} />
      </Routes>
      <GoToTop />
      <Footer />
    </Router>
  )
}

export default App
