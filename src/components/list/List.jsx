import React, { useEffect } from "react";
import { useBirds } from "../../context/BirdsContext";
import Card from "./Card";
import styled  from 'styled-components';


const List = () => {
  const { birds, setBirds } = useBirds();

  return (
    <>
      <Container>
        {birds && birds.map((bird) => <Card key={bird.uid} bird={bird} />)}
      </Container>
    </>
  );
};

export default List;

const Container = styled.div`
background:green;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
