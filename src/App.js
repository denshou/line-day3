import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-slice";
let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Apps>
      <Header />
      {showCart && <Cart />}
      <Main />
    </Apps>
  );
}

export default App;

const Apps = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #3f3f3f;
`;
