import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
        
            <Routes>
              <Route path="/" element={<ProductList />}>
                {/* <ProductList /> */}
              </Route>
              <Route path="/add" element={<AddProduct />}>
                {/* <AddProduct /> */}
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    

        
  );
}

export default App;
