import Category from "./Category";
import { useCategories } from "./CategoryProvider";

export default function Categories() {
  const { categories } = useCategories();

  return (
    <div>
      {categories.map((category, index) => (
        <Category key={category.id} category={category} index={index} />
      ))}
    </div>
  );
}
