import Categories from "./Categories";
import CategoryProvider from "./CategoryProvider";
import "./App.css";

function App() {
  return (
    <CategoryProvider>
      <Categories />
    </CategoryProvider>
  );
}

export default App;
