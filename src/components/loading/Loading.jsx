import React from 'react';
import styled from 'styled-components';


const Loading = () => {
  return (
    <Container>
      <img src="https://i.ibb.co/68gN6T4/bird-animate.gif" alt="" />
    </Container>
  );
}

export default Loading;

const Container = styled.div`
width:100%;
height:100vh;
position:fixed;
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
background:white;
& img{
    width:40%;
}
`