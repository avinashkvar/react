import logo from "./logo.svg";
import "./App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Route, Routes } from "react-router-dom";
import { TodoDetail } from "./components/TodoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <TodoInput />
              <TodoList />
            </div>
          }
        ></Route>
        <Route  path="/todo/:id"  element={ <TodoDetail/> }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
