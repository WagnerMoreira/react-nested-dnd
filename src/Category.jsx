import CategoryItem from "./CategoryItem";
import { useCategories } from "./CategoryProvider";

export default function Category({ category, index: categoryIndex }) {
  const { moveCategory } = useCategories();

  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", categoryIndex);
    event.dataTransfer.effectAllowed = "move"; // only allow moving (not copying, etc.)
  };

  const drop = (event) => {
    event.stopPropagation(); // prevent the event from bubbling up to item drop handlers
    const fromIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
    moveCategory(fromIndex, categoryIndex);
  };

  return (
    <div
      draggable
      onDragStart={dragStart}
      onDrop={drop}
      onDragOver={(event) => event.preventDefault()}
    >
      <h2>{category.name}</h2>
      {category.items.map((item, index) => (
        <CategoryItem
          key={index}
          item={item}
          index={index}
          categoryIndex={categoryIndex}
        />
      ))}
    </div>
  );
}
