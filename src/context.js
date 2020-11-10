import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handelDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addCart = (id) => {
    let tempProducts = [...this.state.products]; // Let
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.total = product.count * product.price;

    this.setState({ cart: [...this.state.cart, product] }, () =>
      this.addTotals()
    );
  };

  increment = (id) => {
    const tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((item) => item.id == id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => this.addTotals()
    );
  };

  decrement = (id) => {
    const tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((item) => item.id == id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    if (product.count > 1) {
      product.count = product.count - 1;
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => this.addTotals()
      );
    } else return null;
  };

  deleteItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.count = 0;
    tempProducts.price = 0;
    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => this.addTotals()
    );
  };

  clearCart = (id) => {
    this.setState(() => {
      return { cart: [] };
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addCart: this.addCart,
          increment: this.increment,
          decrement: this.decrement,
          deleteItem: this.deleteItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
