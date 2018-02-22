import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (

      <header>

      <div className='logo'>
            Delorean Ice Cream!
      </div>

      <nav>
          <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/icecream'> IceCream </Link> </li>
            <li> <Link to={`/add`}>Add </Link> </li>
          </ul>
      </nav>

      </header>

    )
}



export default Header;
