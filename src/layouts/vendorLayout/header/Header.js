import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => {
  return (
    <div className="container">
      <Mobile />
      <Desktop />
    </div>
  );
};

export default Header;
