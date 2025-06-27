import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => 
{
    return (
        <header>
            <div className="container text-center">
                <div className="col-md-12 col-sm-12">
                    <div className="img">
                        <Link to="/"> 
                            <img src="https://front1.edukacija.online/dvidovic/projekt/img/Scrape%20the%20floor%20front.png" alt="Home Image"/> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-md-12 col-sm-12">
                    <nav className="navbar text-center">
                        <ul className="nav-items text-center">
                            <li className="list-item"> <Link to="/shop"> Shop </Link> </li>
                            <li className="list-item-2"> <Link to="/about"> About </Link> </li>
                            <li className="list-item"> <Link to="/contact"> Contact </Link> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;