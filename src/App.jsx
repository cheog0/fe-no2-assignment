import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/styles/GlobalStyles";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <Router>
      <PokemonProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </PokemonProvider>
    </Router>
  );
}

export default App;
