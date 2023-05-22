import React from "react";
import styled from "styled-components";

const StyledButton = ({ bgColor }) => {
  const MyButton = styled.button`
    background-color: ${bgColor};
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
  `;

  return (
    <>
      <MyButton>Pulsa aquí</MyButton>
    </>
  );
};

export default StyledButton;
