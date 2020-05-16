import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Matches
      </Link>
      <div className="right menu">
        <Link to="/leaderboard" className="item">
          Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default Header;