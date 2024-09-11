import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'; 

const Header = ({ onClearCart }) => {
  return (
    <div className='container-header'>
      <div className='container-title'>
        <img className='img-header' src="/logo.png" alt="" />
        <p className='title-header'>E-Commerce Gapsi</p>
      </div>
      <div className='container-btn'>
        <button className='primaryButton' onClick={onClearCart}>
          Reiniciar
          <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
      </div>
    </div>
  );
}

export default Header;
