import {Component} from "react" 

import AboutUs from "../AboutUs"
import ProductSection from "../ProductSection" 
import Testimonials from "../Testimonials" 
import ContactUs from "../ContactUs"
import Footer from "../Footer"

import "./index.css"
class Home extends Component{
    state = {}
    render(){
        return (
        <>
            <div className="hero-section">
                <h1 className="hero-section-header">Unveiling the Beauty of Natural Stones, Perfected for You.</h1>
            </div>
            <AboutUs />
            <ProductSection />
            <Testimonials />
            <ContactUs />
            <Footer />
        </>
        )
    }
}

export default Home