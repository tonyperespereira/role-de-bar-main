import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/home/Home';
import Sobre from './components/sobreNos/SobreNos';
import Servicos from './components/servicos/Servicos';
import Contato from './components/contato/Contato';
import Header from './components/home/Header';
import Login from './components/login/Login';
import Footer from './components/home/Footer';
import CadastroConsumidor from "./components/login/CadastroConsumidor";
import CadastroEstabelecimento from './components/login/CadastroEstabelecimento'

function App() {

   // const [logged, setLogged] = useState(false); 

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastroConsumidor" element={<CadastroConsumidor />} />
          <Route path="/cadastroEstabelecimento" element={<CadastroEstabelecimento />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
