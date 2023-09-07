import React from "react";
import styled from "styled-components";
import Products from "./Products";

const Main = () => {
  const products = [
    {
      id: "p1",
      price: 6000,
      name: "아이템1",
      description: "아이템1 설명",
    },
    {
      id: "p2",
      price: 9000,
      name: "아이템2",
      description: "아이템2 설명",
    },
  ];

  return (
    <>
      <MainBox>
        <MainBoxTitle>좋아하는 제품 구매</MainBoxTitle>
        {products.map((product) => (
          <Products
            key={product.id}
            id={product.id}
            price={product.price}
            name={product.name}
            description={product.description}
          />
        ))}
      </MainBox>
    </>
  );
};

export default Main;

const MainBox = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainBoxTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`;
