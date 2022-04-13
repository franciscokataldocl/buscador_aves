import react, { createContext, useContext, useState } from "react";

//context ACCESO A LA DATA
export const FilterbirdsContext = createContext();

//hook
export const useFilterBirds = () => useContext(FilterbirdsContext);

//PROVEEDOR DE INFORMACIÓN
export const FilterBirdsProvider = ({ children }) => {
  //estado del context
  const [filterBirds, setFilterBirds] = useState([]);

  return (
    <FilterbirdsContext.Provider value={{ filterBirds, setFilterBirds }}>
      {children}
    </FilterbirdsContext.Provider>
  );
};
