import React from "react";

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <button
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => clearCart()}
          >
            clear cart
          </button>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong>$ {cartSubtotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tex :</span>
            <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total :</span>
            <strong>$ {cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}
