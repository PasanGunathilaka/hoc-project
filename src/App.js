import logo from './logo.svg';
import './App.css';
import SearchUsers from './components/UserList';
import SearchTodos from './components/TodoList';
function App() {
  return (
    <div className="App">
     <SearchUsers/>
     <SearchTodos/>
    </div>
  );
}

export default App;
