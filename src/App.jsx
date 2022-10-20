import { AppContainer } from "./Styled/Styled";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/pix" exact element={<Totem />} />
          <Route path="/pix/:client" element={<Totem />} />
          <Route
            path="/cu"
            element={<p style={{ color: "white", fontSize: "2rem" }}>CuP</p>}
          />
          <Route
            path="*"
            element={<p style={{ color: "white", fontSize: "2rem" }}>404</p>}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

import ThreeCanvas from "./components/ThreeCanvas";
import Controls from "./components/Controls";
import TotemProvider from "./context/TotemProvider";
const Totem = function () {
  return (
    <TotemProvider>
      <ThreeCanvas />
      <Controls />
    </TotemProvider>
  );
};
