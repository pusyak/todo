import Column from "./components/Column";
import { createContext, useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const ItemId = createContext(0);

  return (
    <div className="App">
      <Column
        columnType="to do"
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        ItemId={ItemId}
      />
      <Column
        columnType="doing"
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        ItemId={ItemId}
      />
      <Column
        columnType="done"
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        ItemId={ItemId}
      />
    </div>
  );
}

export default App;
