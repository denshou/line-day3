import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { uiActions } from "../store/ui-slice";

const Header = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartBtnHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <HeaderBox>
      <Title>ReduxCart</Title>
      <div>
        <CartBtn onClick={cartBtnHandler}>
          내 카트 <CartCount>{cartQuantity}</CartCount>
        </CartBtn>
      </div>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #242424;
`;
const Title = styled.div`
  font-size: 2rem;
  color: white;
  margin: 1rem 0rem 1rem 2rem;
`;
const CartBtn = styled.button`
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid #1bd1b9;
  border-radius: 8px;
  background: #242424;
  color: white;
  margin: 1rem 2rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const CartCount = styled.div`
  background-color: #1bd1b9;
  color: black;
  width: 2rem;
  padding: 0.3rem 0.5rem;
  border-radius: 20px;
  margin-left: 1rem;
`;
