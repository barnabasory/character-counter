import styles from "./App.module.scss";

import {
  Header,
  CharacterCounter,
  FontChanger,
  ChangeCase,
  BinaryTranslator,
} from "./exports/header";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/MenuContext";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/font-changer");
  }, []);

  const { colorTheme, setColorTheme, handleThemeChange } =
    useContext(ThemeContext);

  return (
    <div className={styles.colorTheme}>
      <Header themeFunction={handleThemeChange} />
      <Routes>
        <Route exact path="/character-count" element={<CharacterCounter />} />
        <Route exact path="/font-changer" element={<FontChanger />} />
        <Route exact path="/change-case" element={<ChangeCase />} />
      </Routes>
    </div>
  );
}

export default App;
