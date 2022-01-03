import React from 'react';

import Menu from '../Menu';
import './style.scss';

function Header() {
  return (
    <div className="header-wrap">
      <p className="brand-description">Digital Experience Design Studio</p>
      <Menu />
    </div>
  );
}

export default Header;
