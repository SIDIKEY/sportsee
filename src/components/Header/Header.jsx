import React from 'react';
import logo from "./logo.svg";
import "./Header.css"

function Header() {
    return (
            <nav className='nav_bar'>
                <div className='logo_sportsee'>
                    <img alt="logo sportsee" src={logo} />
                </div>
				<ul className="nav_links">
					<li className="link">Accueil</li>
					<li className="link">Profil</li>
					<li className="link">Réglage</li>
					<li className="link">Communauté</li>
				</ul>
			</nav>
      
    );
}
  
export default Header;