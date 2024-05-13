import React from 'react'
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
   <header>
    <Link href="#">
     <div className="logo">              {/* logo se reemplaza el nombre de nike por cualquiera  */}
        <img src={Nike} alt="logo" width="150"/>
      </div>
      </Link>
    <ul>
      <li>
        <a href="#">INICIO</a>
      </li>
      <li>
        <a href="#">PRODUCTOS</a>
      </li>
    </ul>
    <div className="cart">
      <box-icon name="cart" ></box-icon>
      <span className="item__total">0</span>
    </div>
   </header>
  ) 
}
