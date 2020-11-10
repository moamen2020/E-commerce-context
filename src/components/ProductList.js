import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                  our <strong className="text-blue">proudects</strong>
                </h1>
              </div>
            </div>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
