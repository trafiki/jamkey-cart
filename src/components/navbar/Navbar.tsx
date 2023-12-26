import { Link } from "react-router-dom";
import "./navbar.css";
import shoppingBag from './shopping-bag.png'
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { IonIcon } from "@ionic/react";

export const Navbar = () => {
  const {
    getTotalCartCount
  } = useContext(ShopContext);

  return (
    <div className="navbar">
      <header>
        <div className="top-bar">Limited time offer! Get <span>10%</span> off when you use the code <span>TRAFIKI-10</span></div>
        <div className="wrapper">
            <div className="logo">
              <Link to="/">jam<span>key</span></Link>
            </div>

            <div className="form desktop-only">
                <IonIcon name="search"></IonIcon>
                <input type="text" name="" placeholder="Search" />
            </div>
            <div className="a-btn desktop-only">
              <Link to="#">Sign Up</Link>
              <Link to="#">Log In</Link>
            </div>
            
            <ul>  
                <li><Link to="#"><IonIcon name="heart-outline"></IonIcon></Link></li>
                <li><Link to="/cart"><span>{getTotalCartCount()}</span><img style={{width: '26px'}} src={shoppingBag} /></Link></li>
            </ul>
        </div>
      </header>
    </div>
  );
};
