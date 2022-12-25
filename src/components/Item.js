import { useContext, useState } from "react";

export function ItemValue({ value, ItemId, todoItems, setTodoItems }) {
  const id = useContext(ItemId);

  const [inputValue, setInputValue] = useState(value);
  const [isActive, setIsActive] = useState(false);

  function handleSubmit(e) {
    const value = e.target.value.value ?? e.target.value;
    e.preventDefault();

    console.log(value);
    if (value.length === 0) {
      setTodoItems(todoItems.filter((item) => item.id !== id));
      return;
    }

    const newItems = todoItems.map((todo) => {
      if (todo.id === id) {
        return todo.id === id ? { ...todo, value: value } : todo;
      }

      return todo;
    });
    setTodoItems(newItems);
  }

  return isActive ? (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        name="value"
        value={inputValue}
        type="text"
        onBlur={handleSubmit}
        autoFocus
      />
    </form>
  ) : (
    <span onClick={() => setIsActive(true)} className="item__value">
      {value}
    </span>
  );
}

export function FirstButton({ type, ItemId, todoItems, setTodoItems }) {
  const id = useContext(ItemId);

  function handleChange(e) {
    e.preventDefault();
    const newItems = todoItems.map((todo) => {
      if (type === "doing") {
        return todo.id === id ? { ...todo, type: "to do" } : todo;
      }

      return todo.id === id ? { ...todo, type: "doing" } : todo;
    });
    setTodoItems(newItems);
  }

  return (
    <button onClick={handleChange} className="item__action">
      {type === "doing" ? "to do" : "doing"}
    </button>
  );
}

export function SecondButton({ type, ItemId, todoItems, setTodoItems }) {
  const id = useContext(ItemId);

  function handleChange(e) {
    e.preventDefault();
    const newItems = todoItems.map((todo) => {
      if (type === "done") {
        return todo.id === id ? { ...todo, type: "to do" } : todo;
      }

      return todo.id === id ? { ...todo, type: "done" } : todo;
    });
    setTodoItems(newItems);
  }

  return (
    <button onClick={handleChange} className="item__action">
      {type === "done" ? "to do" : "done"}
    </button>
  );
}

export function RemoveButton({ ItemId, todoItems, setTodoItems }) {
  const id = useContext(ItemId);

  function handleRemove(e) {
    e.preventDefault();
    setTodoItems(todoItems.filter((item) => item.id !== id));
  }

  return (
    <button onClick={handleRemove} className="item__action">
      remove
    </button>
  );
}
