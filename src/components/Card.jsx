import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; 

const cleanImageUrl = (url) => {
  if (typeof url === 'string') {
    return url.replace(/[\[\]"]/g, ''); // Remueve [ ] y "
  }
  return url;
}

const Card = ({ data, addToCart  }) => {
  return (
    <div className="product-item">
      <img
        width={100}
        height={100}
        src={data.images && data.images.length > 0 ? cleanImageUrl(data.images[0]) : 'https://via.placeholder.com/100'}
        alt={data.title}
      />
      <div className='info-card'>
        <h3>{data.title}</h3>
        <p>Price: ${data.price}</p>
        <button className='primaryButton' onClick={() => addToCart(data)}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  )
}

export default Card
