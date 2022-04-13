import React, {useState, useEffect} from "react";
import { useBirds } from "../../context/BirdsContext";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from "react-router-dom";
import BackButton from '../backbutton/BackButton';




const ContainerSingle = () => {


    const params = useParams();


  const { birds, setBirds } = useBirds();
    const [single, setSingle] = useState({});

    useEffect(() => {
            const filtered = birds.filter((b) => b.uid === params.uid);
setSingle(filtered[0])
    }, [])



    return (
        <>
            <BackButton/>
        {single.images ? (
          <CardBox
            as={motion.div}
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0, type: "spring", duration: 2 }}
            className="shadow animate-2s"
            style={{
              backgroundImage: "url(" + `${single.images.full}` + ")",
            }}
          ></CardBox>
            ) : null}

      </>
    );
};

export default ContainerSingle;


const CardBox = styled.div`
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 0 0 100px 100px;
`;
