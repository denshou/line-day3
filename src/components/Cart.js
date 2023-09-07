import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <CartBox>
      <ShoppingCart>
        <Title>당신의 쇼핑 카트</Title>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
            }}
          />
        ))}
      </ShoppingCart>
    </CartBox>
  );
};

export default Cart;

const CartBox = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;
const ShoppingCart = styled.div`
  background-color: #04bfff;
  width: 50rem;
  color: white;
  padding: 1rem;
`;
const Title = styled.div`
  text-align: left;
  margin-left: 1rem;
`;
