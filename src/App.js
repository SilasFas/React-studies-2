import './App.css';
import { HelloWorld } from './components/HelloWorld';
import { SayMyName } from './components/SayMyName';
import { Pessoa } from './components/Pessoa';
import { Frase } from './components/Frase';
import { List } from './components/List';

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
      <Frase />
      <Frase />
      < List />

    </div>
  );
}

export default App;
