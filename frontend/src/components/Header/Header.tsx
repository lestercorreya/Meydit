import './Header.css'

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className='logoSection' to="/">
        <div className="logo"></div>
        Meyd.it
      </Link>
    </div>
  );
};

export default Header;