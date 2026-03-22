import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Review from "./pages/review";
import Layout from "./Layout";
import Pokedex from "./pages/pokedex";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/demos" element={<Review />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Route>
    </Routes>
  );
}

export default App;
