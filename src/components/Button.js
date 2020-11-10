import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: ${(props) => (props.red ? "1rem" : "1.4rem")};
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  padding: 0.2rem 0.5rem;
  border-color: ${(props) =>
    props.cart
      ? "var(--lightYellow)"
      : props.red
      ? "var(--mainRed)"
      : "var(--lightBlue)"};
  color: ${(props) =>
    props.cart
      ? "var(--lightYellow)"
      : props.red
      ? "var(--mainRed)"
      : "var(--lightBlue)"};
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  border-radius: 4px;

  &:hover {
    background: ${(props) =>
      props.cart
        ? "var(--lightYellow)"
        : props.red
        ? "var(--mainRed)"
        : "var(--lightBlue)"};

    color: ${(props) => (props.red ? "var(--mainWite)" : "var(--mainBlue)")};
  }

  &:focus {
    outline: none;
  }
`;
