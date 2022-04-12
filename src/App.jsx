import axios from 'axios';
import React, {useEffect} from 'react';
import List from './components/list/List';
import { useBirds } from './context/BirdsContext';
import GlobalStyle from './styles/globalStyles';



function App() {
  const { birds, setBirds } = useBirds();

  const getBirds = async () => {
    const { data } = await axios("https://aves.ninjas.cl/api/birds");
    setBirds(data);
  };

  useEffect(() => {
    getBirds();
  }, []);



  return (
    <>
      <GlobalStyle />
      <List/>
    </>
  );
}

export default App
