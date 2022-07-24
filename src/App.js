import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect (() =>{
    setLista([])
  }, []);
  return (
    <div className="container">
    <div className="title"><h1>Todo List</h1></div>
    <div className="new-item">
    <input placeholder="Tarefa" value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"/>
    <button onClick={() => {
        return adicionarNovoItem();
      }}>Adicionar</button>
    </div>
    <ul className="todo-list">
      {lista.map((item, index) => (
      <li key={index} className="todo-item">
        {item}
        <button onClick={() => deletarItem(index)}>
          Deletar
        </button>
      </li>
      ))}
    </ul>
    </div>
  );
  function adicionarNovoItem() {
    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo 'Tarefa'.");
    return;
  }

  let itemIndex = lista.indexOf(novoItem);
  if(itemIndex >= 0) {
    alert("Você já adicionou esta 'Tarefa'.");
    return;
  }
    setLista([...lista, novoItem]);
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray =[...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
}

export default App;
