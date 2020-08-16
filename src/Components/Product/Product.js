import React from 'react'
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
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
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}
export default Product;


// export default function SimpleRating() {
  // const [value, setValue] = React.useState(2);

//   return (
//     <div>

//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Read only</Typography>
//         <Rating name="read-only" value={2} readOnly />
//       </Box>

//     </div>
//   );
// }


