import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategory,
  searchProducts,
  sortProducts,
} from "../../redux/actions/productActions";
import { RootStateType } from "../../redux/reducers/rootReducer";
import "./Filter.css";

const Filter = () => {
  const category = useSelector(
    (state: RootStateType) => state.productReducer.category
  );
  const sort = useSelector((state: RootStateType) => state.productReducer.sort);
  const keyword = useSelector(
    (state: RootStateType) => state.productReducer.colour
  );
  const products = useSelector(
    (state: RootStateType) => state.productReducer.filteredProducts
  );
  const count = products.length;
  const dispatch = useDispatch();

  

  const handleSearchProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchProducts(event.target.value));
  };

  return (
    <div className="filter">
     
      <div className="search">
        <Form className="d-flex nv-search">
          <input
            type="text"
            placeholder="Search product by Colour..."
            className="me-2 sm nv-input"
            aria-label="Search"
         
            onChange={handleSearchProducts}
          />
        </Form>
      </div>
    </div>
  );
};

export default Filter;
