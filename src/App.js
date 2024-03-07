import Todo from "./components/Todo";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Todo App" />
      <Todo />
    </div>
  );
}

export default App;
