import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className=" nav-wrapper navbar navbar-expand-sm navbar-dark px-sm-5 ">
        <Link to="/" className="nav-link">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span>My Cart</span>
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
