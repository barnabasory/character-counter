import { Header, Dropdown, CharacterCounter } from "./exports/header";
import { Routes, Route } from "react-router-dom";
import { useToggleMenuContext } from "./context/MenuContext";
function App() {
  const { toggleMenu } = useToggleMenuContext();
  return (
    <div>
      {/* {toggleMenu && <Dropdown />} */}
      <Header />
      <Routes>
        <Route exact path="/" element={<CharacterCounter />} />
      </Routes>
    </div>
  );
}

export default App;
