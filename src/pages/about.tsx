import React from "react";
import { Link } from "gatsby";

const about = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>About page!</h1>
      </main>
    </div>
  );
};

export default about;
