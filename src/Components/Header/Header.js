import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from '../../Services/StateProvider'
// import reducer, { initialState } from './Services/reducer';
// import reducer, { basket } from './Services/reducer';

export default function Header() {

  const [{ basket }] = useStateValue();

  return (
    <nav className="header">

      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"></img>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        <Link to="/login" clasName="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Jordi</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" clasName="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" clasName="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" clasName="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className=" header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>


    </nav>

  )
}