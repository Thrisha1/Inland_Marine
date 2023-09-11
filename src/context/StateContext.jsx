import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export function StateProvider({ children }) {
  const [boats, setBoats] = useState([]);
  const [people, setPeople] = useState([]);
  const [interiors, setInteriors] = useState([]);

  return (
    <StateContext.Provider value={{ 
        boats,
        setBoats,
        people,
        setPeople,
        interiors,
        setInteriors
    }}>
      {children}
    </StateContext.Provider>
  );
}


export const useStateContext = () => useContext(StateContext)