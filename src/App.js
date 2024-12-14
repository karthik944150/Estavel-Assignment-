import {BrowserRouter, Route, Routes} from "react-router-dom" 

import NavBar from "./components/NavBar" 

import HeroSection from "./components/HeroSection" 
import AboutUs from "./components/AboutUs"
import ProductSection from "./components/ProductSection" 
import Testimonials from "./components/Testimonials" 
import ContactUs from "./components/ContactUs"

const App = () => (
 <>
   <NavBar />
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<HeroSection />}/>
      <Route exact path="/aboutus" element = {<AboutUs />}/>
      <Route exact path="/products" element = {<ProductSection />}/>
      <Route exact path="/testimonials" element = {<Testimonials />}/>
      <Route exact path="/contactus" element = {<ContactUs />}/>
    </Routes>
  </BrowserRouter>
  </>
)

export default App