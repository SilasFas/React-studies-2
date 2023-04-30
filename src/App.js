import './App.css';
import { HelloWorld } from './components/HelloWorld';
import { SayMyName } from './components/SayMyName';
import { Pessoa } from './components/Pessoa';

function App() {
  const nome = 'Ana'
  return (
    <div className="App">
      <SayMyName nome='Silas' />
      <SayMyName nome='Pedro' />
      <SayMyName nome={nome} />
      
      <Pessoa
        nome='Silas'
        idade={45}
        profissao='Programador'
        foto='https://via.placeholder.com/150'
      />
    </div>
  );
}

export default App;
