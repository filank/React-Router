import React from "react";
import { Link, Route } from "react-router-dom";
import { Product } from "./Product";

const Products = ({ match }) => {
  const productData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];
  var linkList = productData.map((product) => {
    return (
      <li>
        <Link
          style={{ textDecoration: "none" }}
          to={`${match.path}/${product.id}`}
        >
          {product.name}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3> Products</h3>
          <ul style={{ marginTop: 70, paddingRight: 40, listStyle: "none" }}>
            {linkList}
          </ul>
        </div>
      </div>
      <Route
        path={`${match.path}/:Id`}
        render={(props) => <Product data={productData} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => <div>Please select a product.</div>}
      />
    </div>
  );
};

export default Products;
