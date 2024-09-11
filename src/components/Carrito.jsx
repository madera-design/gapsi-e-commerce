import React from 'react'

const Carrito = ({data}) => {
  return (
    <div className="cart">
        <h2>Carrito: {data.length}</h2>
        <ul>
        {data.map((item, index) => (
            <li key={index}>
            {item.title} - ${item.price}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Carrito
