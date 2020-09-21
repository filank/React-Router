import React from "react";
import { Link, Route } from "react-router-dom";

const Category = ({ match }) => {
  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>
          <Link to={`${match.url}/shoes`} style={{ textDecoration: "none" }}>
            Shoes
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to={`${match.url}/boots`} style={{ textDecoration: "none" }}>
            Boots
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to={`${match.url}/footwear`} style={{ textDecoration: "none" }}>
            Footwear
          </Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            <h3 style={{ paddingLeft: 40, paddingTop: 100 }}>
              {match.params.name}
            </h3>
          </div>
        )}
      />
    </div>
  );
};

export default Category;
