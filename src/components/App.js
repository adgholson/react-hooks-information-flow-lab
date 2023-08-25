import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value);
  }

  const filteredItems = selectedCategory === "All" ? itemData : itemData.filter(item => item.category === selectedCategory);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <Filter onChange={handleCategoryChange} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
