import React from 'react';
import NavbarsButton from './components/NavbarsButton'

const Navbars = () => {
  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="buttons">
        {/* Aqui é onde ficarão os botões */}
        <NavbarsButton label='' link=''/>;
        <NavbarsButton label='' link=''/>;
        <NavbarsButton label='' link=''/>;
        <NavbarsButton label='' link=''/>;
        <NavbarsButton label='' link=''/>;
        <NavbarsButton label='' link=''/>;
      </div>
    </nav>
  );
};

export default Navbars;
