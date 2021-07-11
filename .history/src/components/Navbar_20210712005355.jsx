import React, {useState} from "react";

const Navbar = () => {

    // javaScript to get the toggle bar to function on clicks 
    const [navLinkOpen, navLinkToggle] = useState(false);

       
    const handleNavLinkToggle = () => {
        navLinkToggle(!navLinkOpen);
    };

    const renderClasses = () => {
        let classes = " navlinks ";

        if (navLinkOpen) {
            classes += " active "
        }

        return classes;
    };

    return (
        <nav> 
            <div className="logo">
                <h4>Jala Design</h4>
            </div>
            <ul className={renderClasses()}>
                <li className="link"><a href="/">Home</a></li>
                <li className="link"><a href="/#/about">About Us</a></li>
                <li className="link"><a href="/#/services">Services</a></li>
                <li className="link"><a href="/#/portfolio">Portfolio</a></li>
                <li className="link"><a href="/#contact">Contact</a></li>

            </ul>
            <div onClick={handleNavLinkToggle} className="hamburger">
                <i className="fas fa-bars fa-lg"></i>
            </div>
        </nav>
       
    )
}

export default Navbar