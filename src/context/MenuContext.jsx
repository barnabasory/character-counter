import { createContext, useContext, useState } from "react";

const ToggleMenuContext = createContext({});
const MenuContext = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

export default MenuContext;

export const useToggleMenuContext = () => {
  return useContext(ToggleMenuContext);
};
