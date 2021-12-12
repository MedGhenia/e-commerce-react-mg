import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = ({cartItems}) => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                    <img className="img-logo" src="/assets/logo-project2.png" alt=""/>
                        
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/" className="accueil-button">Accueil</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/panier" className="panier">
                            <i class="fas fa-shopping-cart"/> 

                            
                            { <span className="cart-length">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span> }
                            

                            
                            
                            
                            
                        </Link>
                    </li>
                </ul>
                
            </div>
        </header>
    )
    
}

export default Navbar;
