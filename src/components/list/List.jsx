import React, { useEffect, useState } from "react";
import { useBirds } from "../../context/BirdsContext";
import { useFilterBirds } from "../../context/FilterBirds";

import Card from "./Card";
import styled from "styled-components";
import Loading from "../loading/Loading";







const List = () => {
  const { birds, setBirds } = useBirds();
  const { filterBirds, setFilterBirds } = useFilterBirds(birds);

    const [visible, setVisible] = useState(5);

    useEffect(() => {
      setFilterBirds(birds)
    }, [birds])


  const showMore = () => {
    setVisible((prev) => prev + 5);
  };

  return (
    <>
      {filterBirds.length === 0 ? (
        <Loading />
      ) : (
        <Container>
          {filterBirds &&
            filterBirds
              .slice(0, visible)
              .map((bird) => <Card key={bird.uid} bird={bird} />)}
          {filterBirds.length >= 10 && (
            <ContainerButton>
              <Button onClick={showMore} className="btn btn-yellow">
                Cargar más
              </Button>
            </ContainerButton>
          )}
        </Container>
      )}
    </>
  );
};

export default List;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ContainerButton = styled.div`
  padding: 5% 0;
`;
const Button = styled.button`
  margin: 0 auto;
  display: flex;
  background: var(--yellow);
  color: white;
`;
