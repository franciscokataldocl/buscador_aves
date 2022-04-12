import react, { createContext, useContext, useState } from "react";

//context ACCESO A LA DATA
export const BirdsContext = createContext();

//hook
export const useBirds = () => useContext(BirdsContext);

//PROVEEDOR DE INFORMACIÓN
export const BirdsProvider = ({ children }) => {

  //estado del context
  const [birds, setBirds] = useState([]);

  return (
    <BirdsContext.Provider value={{ birds, setBirds }}>
      {children}
    </BirdsContext.Provider>
  );
};
