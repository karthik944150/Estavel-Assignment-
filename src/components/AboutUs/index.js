import {Component} from "react" 
import "./index.css"

class AboutUs extends Component{
    state = {

    }
    render(){
        return (
            <div className = "about-us-section-container">
                <h1>About Us</h1>
                <div className="about-us-details-section">
                 <div className="details-section">
                    <p className="details-title">___ ABOUT US ___</p>
                    <h1 className="detail-header">Your Trusted Global Stone Marketplace</h1>
                    <p className="detail-description">At StonePedia Pvt Ltd, we are redefining how the world sources and procures natural stones.
                     Based in India, StonePedia is an award-winning startup dedicated to simplifying the procurement 
                     of the world’s finest stones by connecting buyers with only certified and verified quarries and 
                     processing units across the globe. From premium Granite to luxurious Marble, from durable Onyx to versatile 
                     Sandstone, we provide access to the highest quality natural stones sourced from across the world, 
                     following a rigorous, standardized process that ensures quality and sustainability at every step.</p>  
                </div>
                <div className="details-section">
                    <p className="details-title">___ OUR VISION ___</p>
                    <h1 className="detail-header">Shaping the Future of Stone Procurement</h1>
                    <p className="detail-description">We envision a world where sourcing natural stones is as effortless as it is transparent.
                    StonePedia is on a mission to create a centralized marketplace where builders, architects, 
                    and contractors can access verified, premium natural stones with confidence. Our goal is to become 
                    the global leader in stone sourcing by ensuring trust, quality, and efficiency in every transaction.</p>
                </div>
                <div className="details-section">
                    <p className="details-title">___ OUR MISSION ___</p>
                    <h1 className="detail-header">Driving Innovation in Stone Solutions</h1>
                    <p className="detail-description">Our mission is simple yet impactful: to provide an extensive collection of certified and verified
                       natural stones to clients worldwide, while maintaining the highest standards of quality and service.
                       At Stonepedia, we believe that every project deserves the best, and our platform enables customers to explore,
                      compare, and select from a wide array of stones that fit their exact specifications. We take pride in offering
                      expert guidance throughout the process to ensure that you make informed decisions for your projects, whether residential,
                      commercial, or industrial.</p>
                </div>
                <div className="details-section">
                    <p className="details-title">___ The StonePedia Experience ___</p>
                    <h1 className="detail-header">Simplified, Secure, and Seamless</h1>
                    <p className="detail-description">
                        Our platform is designed with simplicity and security in mind. We ensure that your personal and business
                         data is fully protected, complying with the latest industry standards in data privacy. From tax invoices
                          to customized logistics, our goal is to make stone procurement easy, transparent, and reliable. 
                          For more details, you can explore our Terms & Conditions, Privacy Policy, and FAQs on our website.</p>
                </div>
                <div className="details-section">
                    <h1 className="detail-header">Join the StonePedia Revolution</h1>
                    <p className="detail-description">
                    At StonePedia, we are not just a marketplace; we are a partner in every project. Our vision is to make high-quality
                     natural stones accessible to everyone, whether you’re working on a large commercial development or crafting a unique 
                     residential space. With StonePedia, you’re not just buying stones—you’re investing in quality, reliability, and global
                      excellence. Let us shape the future of your projects with the best stones the world has to offer.
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default AboutUs