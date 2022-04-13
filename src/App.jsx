import axios from "axios";
import React, { useEffect } from "react";
import List from "./components/list/List";
import { useBirds } from "./context/BirdsContext";
import Filter from './components/filter/Filter';


function App() {
  const { birds, setBirds } = useBirds();

  const getBirds = async () => {
    const { data } = await axios("https://aves.ninjas.cl/api/birds");
    data.sort((a, b) => (a.name.spanish > b.name.spanish ? 1 : -1));
    setBirds(data);
  };


  useEffect(() => {
    getBirds();

  }, []);

  return (
    <>

        <Filter />
        <List />

    </>
  );
}

export default App;
