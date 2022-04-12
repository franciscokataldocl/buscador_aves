import React from "react";
import styled from "styled-components";

const Card = ({ bird }) => {
  console.log(bird);
  return (
    <CardBox
      style={{
        backgroundImage: "url(" + `${bird.images.full}` + ")",
      }}
    >
      card
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  width: 40%;
  margin: 5%;
  background: white;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height:250px;
  border-radius: 15px;
`;
