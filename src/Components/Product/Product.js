import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'


function Product({ id, title, image, price, rating, link }) {
  return (
    <div className="product">
      <div className="product__info">

        <p>{title}</p>
        <p className="product__">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill().map((_) => (
              <p>⭐</p>
            ))
          }
        </div>
      </div>

      <img src={image} alt="" />
      <button >Add to Basket</button>

      {/* <button >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Amazon
          </a>
      </button> */}

    </div>
  );
}
export default Product;





