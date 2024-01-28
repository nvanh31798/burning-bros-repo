import "./App.css";
import { SearchBar } from "./client/common-components/SearchBar/SearchBar";
import { ProductList } from "./client/features/product/component/ProductList";

function App() {
  return (
    <div>
      <div className="bg-secondary p-5 mb-5">
        <h1>Burning bros interview test</h1>
      </div>
      <div>
        <SearchBar />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
