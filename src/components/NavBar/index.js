
import "./index.css";

const NavBar = () => {

    return (
        
        <nav className="nav-bar-container">
            {/* Mobile-section */}
            <div className="mobile-section">
                <img
                    src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
                    alt="website-logo"
                    className="logo"
                />
            </div>

            {/* Large-device-section */}
            <div className="nav-bar-lg-section">
                <img
                    src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
                    alt="website-logo"
                    className="logo"
                />
            </div>
        </nav>
    );
};

export default NavBar;
