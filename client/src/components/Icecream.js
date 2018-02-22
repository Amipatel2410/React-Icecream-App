import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Icecream = (props) => {
  return (

      <div className="ic-inlist">
          <img src={props.icecream.url} />
          <h2> {props.icecream.flavor} </h2>
          <p> Rating: {props.icecream.Rating} </p>
          <Link to={`/icecream/${props.icecream.id}`}> See More </Link>
      </div>

    )
}

export default Icecream;
