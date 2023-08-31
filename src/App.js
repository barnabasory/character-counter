import {
  Header,
  CharacterCounter,
  FontChanger,
  ChangeCase,
  BinaryTranslator,
} from "./exports/header";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/character-count");
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/character-count" element={<CharacterCounter />} />
        <Route exact path="/font-changer" element={<FontChanger />} />
        <Route exact path="/change-case" element={<ChangeCase />} />
        <Route exact path="/binary-translator" element={<BinaryTranslator />} />
      </Routes>
    </div>
  );
}

export default App;
