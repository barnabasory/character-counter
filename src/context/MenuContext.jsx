import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

const ToggleThemeContext = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("theme-light");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const themeColor = localStorage.getItem("theme-color");
    if (themeColor) {
      setColorTheme(themeColor);
    }
  }, [colorTheme, setColorTheme]);

  const handleThemeChange = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };
  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        toggleMenu,
        setToggleMenu,
        handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ToggleThemeContext;
// import { createContext, useContext, useState } from "react";

// const ToggleMenuContext = createContext({});
// const MenuContext = ({ children }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   return (
//     <ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
//       {children}
//     </ToggleMenuContext.Provider>
//   );
// };

// export default MenuContext;

// export const useToggleMenuContext = () => {
//   return useContext(ToggleMenuContext);
// };
