import { useCategories } from "./CategoryProvider";

export default function CategoryItem({ item, index, categoryIndex }) {
  const { moveItemWithinCategory } = useCategories();

  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const drop = (event) => {
    event.preventDefault();
    const fromIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
    moveItemWithinCategory(fromIndex, index, categoryIndex);
  };

  return (
    <div
      draggable
      onDragStart={dragStart}
      onDrop={drop}
      onDragOver={(event) => event.preventDefault()}
      className="p-2 border-2 border-dashed w-24"
    >
      {item}
    </div>
  );
}
