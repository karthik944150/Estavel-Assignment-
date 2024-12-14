import { FaStar } from "react-icons/fa6";
import "./index.css" 

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h1 className="testimonial-header">Testimonials</h1>
            <div className="testimonils">
                <div className="testimonial-card">
                    <img 
                        src = "https://lh3.googleusercontent.com/a-/ALV-UjVEVYNDvn4OsuxtL1ay1qM8AmiVfAejFllmXt7AV0n5D3mMjvD_Zg=w128-h128-c-rp-mo-br100" 
                        alt = "client-img" 
                        className="testimonial-image"
                    />
                    <h1 className="testimonial-name">Vishakha Sharma</h1>
                    <div className="rating-container">
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                    </div>
                    <p className="testimonial-description">
                        Stonepedia has a stunning selection of marble and granite - 
                        found the perfect countertop for my kitchen. This company has 
                        competitive prices and beautiful stones - Stonepedia exceeded my expectations,
                        highly recommend them!"
                    </p>
                </div>
                <div className="testimonial-card">
                    <img 
                        src = "https://lh3.googleusercontent.com/a-/ALV-UjVLfKDAjMCre7NoctRD1Dwg9GhO-brRDRCjQyUP-KMVAB1hlQPM=w128-h128-c-rp-mo-br100" 
                        alt = "client-img" 
                        className="testimonial-image"
                    />
                    <h1 className="testimonial-name">Dev Patel</h1>
                    <div className="rating-container">
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                    </div>
                    <p className="testimonial-description">
                        Thanks for understanding our requirement and sourcing the best our project. appreciate the whole StonePedia Team.
                    </p>
                </div>
                <div className="testimonial-card">
                    <img 
                        src = "https://lh3.googleusercontent.com/a-/ALV-UjUadPgQswf8Unpfl9gSeluEr9IsfxT_RvLL_YX5G1cIt7TTaA6D=w128-h128-c-rp-mo-br100" 
                        alt = "client-img" 
                        className="testimonial-image"
                    />
                    <h1 className="testimonial-name">Ghanishtha Sharma</h1>
                    <div className="rating-container">
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                        <FaStar size={20} className="rating-star"/>
                    </div>
                    <p className="testimonial-description">
                    "Stonepedia's team is too helpful and has great stock availability. Thank you, I will surely recommend it to my representatives!"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials