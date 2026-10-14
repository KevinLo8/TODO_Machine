import React from "react";

function UseLocalStorage(itemName, InitialValue) {
  const [item, setItem] = React.useState(InitialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(InitialValue));
          parsedItem = InitialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

    }, 2000);
  }, [])

  const updateItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  }

  return {
    item,
    updateItem,
    loading,
    error
  };
}

export { UseLocalStorage };