import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyles = {
  color: 'black',
  background: '#fff',
  borderRadius: '2rem',
  margin: '.2rem',
  padding: '0 .6rem'
};

const routes = [
  {
    path: '/products/create',
    name: 'Create Products',
    icon: 'shopping-cart'
  },
  {
    path: '/products/all-products',
    name: 'Products List',
    icon: 'list'
  }
];
const SideNavBar = () => {
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li>
          CoopEast
        </li>
        {routes.map((links) => (
          <li key={links.name}>
            <NavLink
              activeStyle={activeStyles}
              to={links.path}
            >
              <FontAwesomeIcon
                style={{ marginRight: '1rem' }}
                icon={['fa', `${links.icon}`]}
              />
              {links.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
