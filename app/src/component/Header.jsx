import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <div className="header-wrap">
        <Link to="/" className="header-logo">
          Zoo!
        </Link>
        <nav className={navOpen ? 'nav-open' : ''}>
          <button onClick={toggleNav}>Toggle Nav</button>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals" onClick={toggleNav}>
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink to="/birds" onClick={toggleNav}>
                Birds
              </NavLink>
            </li>
            {/* Add more NavLink elements for other categories or links */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
