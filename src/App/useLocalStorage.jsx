import React from "react";

function UseLocalStorage(itemName, InitialValue) {

  const localStorageTodos = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageTodos) {
    localStorage.setItem(itemName, JSON.stringify(InitialValue));
    parsedItem = InitialValue;
  } else {
    parsedItem = JSON.parse(localStorageTodos);
  }

  const [item, setItem] = React.useState(parsedItem);

  const updateItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  }

  return [item, updateItem];
}

export { UseLocalStorage };