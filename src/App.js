import { Route, Routes } from "react-router-dom";
import { HomePage, } from "@pages";
import "./App.css";
import DetailProduct from "./pages/detail-product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/detail-product/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
