import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

//Paginas de navegação
import { Home } from './components/Pages/Home';
import { Empresa } from './components/Pages/Empresa';
import { Contato } from './components/Pages/Contato';
import { NotFound } from './components/Pages/NotFound';

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/contato' element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
