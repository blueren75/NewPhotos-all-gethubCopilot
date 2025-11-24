import React from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Collegedale International',
  '/my-ac': 'Aircraft I Have Owned',
  '/af-ac': 'Aircraft I Have Flown',
  '/harmon': 'The Harmon Build'
};

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="page-header">
      <h1>{titles[pathname] || 'Collegedale International'}</h1>
    </header>
  );
}

export default Header;
