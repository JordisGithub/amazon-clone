import React from 'react'
import './Product.css'
import { useStateValue } from '../../Services/StateProvider'
// import { Link } from 'react-router-dom'


function Product({ id, title, image, price, rating }) {

  const [{ }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
        // link: link
      }
    })
  };

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
      <button onClick={addToBasket} >Add to Basket</button>

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





