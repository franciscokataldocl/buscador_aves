import React from "react";
import styled from "styled-components";
import { useFilterBirds } from "../../context/FilterBirds";
import { useBirds } from "../../context/BirdsContext";
import react, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const Filter = () => {

  //contexto todas las aves
  const { birds, setBirds } = useBirds();
  //contexto aves filtradas
    const { filterBirds, setFilterBirds } = useFilterBirds();
    const [searchMsg, setSearchMsg] = useState('');

  //estado del formulario
  const [search, setSearch] = useState({
    search: "",
  });

    //al detectar cambio en el input
  const handleChange = (e) => {
     setSearch({
       ...search,
       [e.target.name]: e.target.value.toLowerCase(),
     });
  };


    //cuando el input tengas mas de 3 letras
    useEffect(() => {

        if (search.search.length < 3) {
            setSearchMsg("");
            setFilterBirds(birds);
        }
          if (search.search.length > 3) {

            const filtered = filterBirds.filter((b) =>
              b.name.spanish
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .startsWith(search.search)
            );

              if (filtered.length !== 0) {
                 setSearchMsg(
                   `Encontramos ${
                     filtered.length >= 2
                       ? `${filtered.length} coincidencias 😀`
                       : `${filtered.length} coincidencia 😀`
                   }  `
                 );

                 setFilterBirds(filtered);

            } else {
                setFilterBirds(birds);
                setSearchMsg(`No encontramos aves 😔 `);
            }
          }

    }, [search]);


  return (
    <Container>
      <Form>
        <InputGroup>
          <input
            onChange={handleChange}
            value={search.search}
            name="search"
            type="text"
            placeholder="BUSCA UN AVE"
          />
        </InputGroup>
      </Form>
      <TextContainer
        as={motion.div}
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0, type: "spring", duration: 2 }}
      >
        <p>{searchMsg}</p>
      </TextContainer>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding:3% 0;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:10px;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    border-radius: 100px;
    border: none;
    background: var(--grey);
    padding: 15px 10%;
    font-size: 1rem;
    font-weight: 300 !important;
    text-align: center;
    &:focus {
      border: 1px solid var(--yellow);
      outline: none !important;
    }
  }
`;
const TextContainer = styled.div`
height:15px;`