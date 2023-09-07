import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, price, quantity, totalPrice } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <CartList>
      <ListRow>
        <div>{name}</div>
        <div>
          {totalPrice} 원({price} 원/item)
        </div>
      </ListRow>
      <ListRow>
        <div>x{quantity}</div>
        <div>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </ListRow>
    </CartList>
  );
};

export default CartItem;

const CartList = styled.div`
  background-color: #02038b;
  margin: 1rem;
  height: 8rem;
`;
const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
