import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Card = ({ bird }) => {

  return (
    <CardBox
      as={motion.div}
      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0, type: "spring", duration: 2 }}
      className="shadow animate-2s"
      style={{
        backgroundImage: "url(" + `${bird.images.full}` + ")",
      }}
    >
      <Link className="link-card-front" to={`/bird/${bird.uid}`}>
        <TextContent>
          <h3 className="c-white">{bird.name.spanish}</h3>
          <h5 className="italic c-white-opacity">{bird.name.latin}</h5>
        </TextContent>
      </Link>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  width: 40%;
  margin: 5%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  &:hover {
    cursor: pointer;
    &:after {
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9192051820728291) 0%,
        rgba(0, 0, 0, 0.41780462184873945) 100%
      );
    }
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8519782913165266) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const TextContent = styled.div`

`
