 import React from 'react';
 import logo from '../../images/logo.png';
 import './Header.css';
 import App from './../../App';

 const  Header = () => {
     return (
         <div className="h"> 
         <div className="header">
          <img src={logo} alt=""/>
        <nav>
        <a href="/shop">Shop</a>

        <a href="/oder">Oder_Review</a>

        <a href="/manager">Manage_Inventory</a>
        </nav>
         </div>
         </div>
     );
 };
 
 export default Header; 