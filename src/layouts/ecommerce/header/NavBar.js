import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavBar = ({ toggleModal, cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-light">
      <a className="navbar-brand" href="E##">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-2 active">
            <a className="nav-link" href="###">
              Home
              {' '}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="##">Link</a>
          </li>
          <li className="nav-item mx-2 dropdown">
            <a className="nav-link dropdown-toggle" href="##" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="##">Action</a>
              <a className="dropdown-item" href="##">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="##">Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="cart">
        <a onClick={toggleModal} href="##" id="cart">
          <FontAwesomeIcon
            icon={['fa', 'shopping-cart']}
          />
          {' '}
          Cart
          {' '}
          <span className="badge">{cartItems.length}</span>
        </a>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
};

export default NavBar;
