import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';



const BackButton = () => {
        const navigate = useNavigate();

    return (
      <Container>
        <Button className='btn btn-yellow' onClick={() => navigate(-1)}>volver</Button>
      </Container>
    );
}

export default BackButton;

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:3;
left:5%;
top:5%;`
const Button = styled.button``