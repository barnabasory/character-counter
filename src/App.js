import { Header, Dropdown, CharacterCounter } from "./exports/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useToggleMenuContext } from "./context/MenuContext";
function App() {
  const { toggleMenu } = useToggleMenuContext();
  return (
    <div>
      {/* {toggleMenu && <Dropdown />} */}
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Header />} /> */}
          <Route
            exact
            path="/character-counter"
            element={<CharacterCounter />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
