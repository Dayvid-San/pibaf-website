import React, { useState } from "react";
import NavbarsButton from '../Buttons/NavbarsButtons'

const Navbars = (props) => {
  const [mapOn, setMapOn] = useState(false);
  
  const items = [
    {
      label: 'Inicio',
      onClick: () => {
        window.open('#')
      },
    },
    {
      label: 'Sobre nós',
      onClick: () => {
        window.open('#',)
      },
    },
    {
      label: 'Culto online',
      onClick: () => {
        window.open('#')
      },
    },
    {
      label: 'Acontece na Pibaf',
      onClick: () => {
        window.open('#')
      }
    },
    {
      label: 'Contribuir',
      onClick: () => {
        window.open('#')
      }
    },
    {
      label: 'Visite-nos',
      onClick: () => {
        window.open('#')
      }
    },
  ];

  
  return (
      <div className="buttons">
        {/* Aqui é onde ficarão os botões */}
        <div>
            <nav>
                {items.map((item, index) => (
                  <NavbarsButton key={index} label={item.label} target={item.target} onClick={item.onCLick} />
                ))}
            </nav>
        </div>
      </div>
  );
};

export default Navbars;