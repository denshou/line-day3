import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../store/cart-slice";

const Products = (props) => {
  const dispatch = useDispatch();
  const { name, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, name, price }));
  };

  return (
    <ItemBox>
      <ItemNamePrice>
        <div>{name}</div>
        <div>{price}원</div>
      </ItemNamePrice>
      <ItemDescription>{description}</ItemDescription>
      <BtnDiv>
        <button onClick={addToCartHandler}>카트 추가</button>
      </BtnDiv>
    </ItemBox>
  );
};

export default Products;

const ItemBox = styled.div`
  background-color: white;
  width: 55rem;
  margin: 1rem 0;
`;
const ItemNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemDescription = styled.div`
  text-align: left;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: right;
`;
