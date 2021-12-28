import "./App.css";
import Header from "./ui/header";
import Descricao from "./componentes/descricao";
import Features from "./componentes/features";
import Avaliacoes from "./componentes/avaliacoes";
import Contador from "./componentes/contador";
import Footer from "./ui/footer";
import Principal from "./componentes/principal";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />

          <Route path="/descricao" element={<Descricao />} />

          <Route path="/features" element={<Features />} />

          <Route path="/avaliacoes" element={<Avaliacoes />} />

          <Route path="/contador" element={<Contador />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
