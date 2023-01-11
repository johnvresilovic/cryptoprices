import React from 'react';
import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/Currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};