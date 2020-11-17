// ================================================================================
// Imports
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ================================================================================
// Normal variables and functions
const navRoutes = [
  {
    path: '/vendor',
    icon: ['fa', 'home'],
    title: 'Home',
  },
  {
    path: '/event-schedule',
    icon: ['fa', 'people-carry'],
    title: 'Event',
  },
  {
    path: '/event-booth',
    icon: ['fa', 'play'],
    title: 'Story',
  },
  {
    path: '/cart-checkout',
    icon: ['fa', 'shopping-cart'],
    title: 'Cart',
  },
  {
    path: '/profile',
    icon: ['fa', 'person-booth'],
    title: 'Profile',
  },
];

// ================================================================================
// JSX Function
const Navbar = () => {
  return (
    <Nav>
      <List>
        {navRoutes.map((route) => (
          <ListItem key={route.title}>
            <a className="nav-link active" href={route.path}>
              <FontAwesomeIcon icon={route.icon} className="icon mx-auto mb-2" />
              {route.title}
            </a>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

export default Navbar;

// ================================================================================
// Styled components
const Nav = styled.nav.attrs({
  className: 'nav bg-white fixed-bottom justify-content-center mx-auto my-lg-5',
})`
  border-radius: ${(props) => props.theme.styles.borderRadius};
  box-shadow: ${(props) => props.theme.styles.boxShadow};
  padding: 0.2rem;
  width: 70%;
  max-width: 70%;

  .icon {
    color: ${(props) => props.theme.colors.gray};
    display: block;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0.2rem 0;
    border-radius: 0;
    height: 6rem;
    bottom: -5%;
  }
`;

const ListItem = styled.nav.attrs({
  className: 'nav-item border-right border-left my-lg-2 px-lg-4 h-100',
})`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  @media ${(props) => props.theme.mediaQueries.medium} {
    padding: 0rem;
    margin: 0rem;
  }

  /* border-right:2px ${(props) => props.theme.styles.light} solid; */
`;

const List = styled.nav.attrs({
  className: 'nav ',
})`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
  }
`;
