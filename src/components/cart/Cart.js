import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <div className="col-10 mx-auto text-center text-title text-slanted text-blue my-5">
                    <h2>Your Cart </h2>
                  </div>
                  <CartColums />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
