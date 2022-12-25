import { ItemValue, FirstButton, SecondButton, RemoveButton } from "./Item";

export default function Column({
  columnType,
  todoItems,
  setTodoItems,
  ItemId,
}) {
  console.log(todoItems);

  function handleSubmit(e) {
    const nextId =
      todoItems.length > 0
        ? Math.max(
            ...todoItems.map((item) => {
              return item.id;
            })
          ) + 1
        : 0;
    e.preventDefault();
    setTodoItems([
      ...todoItems,
      { id: nextId, value: e.target.value.value, type: columnType },
    ]);
    e.target.value.value = "";
  }

  return (
    <div className="column">
      <h1>{columnType}</h1>

      <div className="column__items">
        {todoItems
          .filter((item) => item.type === columnType)
          .map((item, index) => (
            <ItemId.Provider value={item.id}>
              <div key={item.id} className="item">
                <ItemValue
                  value={item.value}
                  ItemId={ItemId}
                  todoItems={todoItems}
                  setTodoItems={setTodoItems}
                />
                <FirstButton
                  type={columnType}
                  ItemId={ItemId}
                  todoItems={todoItems}
                  setTodoItems={setTodoItems}
                />
                <SecondButton
                  type={columnType}
                  ItemId={ItemId}
                  todoItems={todoItems}
                  setTodoItems={setTodoItems}
                />
                <RemoveButton
                  ItemId={ItemId}
                  todoItems={todoItems}
                  setTodoItems={setTodoItems}
                />
              </div>
            </ItemId.Provider>
          ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="value" className="new-item-input" />
      </form>
    </div>
  );
}
