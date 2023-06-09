import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const useCategories = () => {
  return useContext(CategoryContext);
};

export default function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([
    {
      id: "category-1",
      name: "Category 1",
      items: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: "category-2",
      name: "Category 2",
      items: ["Item 4", "Item 5", "Item 6"],
    },
    {
      id: "category-3",
      name: "Category 3",
      items: ["Item 7", "Item 8", "Item 9"],
    },
  ]);

  const moveItemWithinCategory = (fromIndex, toIndex, categoryIndex) => {
    setCategories((prev) => {
      const newCategories = [...prev];
      const item = newCategories[categoryIndex].items[fromIndex];
      newCategories[categoryIndex].items.splice(fromIndex, 1);
      newCategories[categoryIndex].items.splice(toIndex, 0, item);
      return newCategories;
    });
  };

  const moveCategory = (fromIndex, toIndex) => {
    setCategories((prev) => {
      const newCategories = [...prev];
      const category = newCategories[fromIndex];
      newCategories.splice(fromIndex, 1);
      newCategories.splice(toIndex, 0, category);
      return newCategories;
    });
  };

  return (
    <CategoryContext.Provider
      value={{ categories, moveItemWithinCategory, moveCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
