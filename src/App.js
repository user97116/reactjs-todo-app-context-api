import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="p-5">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
