import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { sort } from "../../../store/reducers/inventoryReducer";

const SortSelector: React.FC = () => {
  const state = useSelector(
    ({ inventory }: RootState) => inventory.sort_option
  );
  const dispatch = useDispatch();
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sort(parseInt(e.target.value)));
  };
  return (
    <div className="">
      <select
        name="filter-selector"
        value={state}
        onChange={handleSelect}
        id="filter-selector"
      >
        <option value="0">Sort by</option>
        <option value="1">Year: Old to New</option>
        <option value="2">Year: New to Old</option>
        <option value="3">Body Style: A to Z</option>
        <option value="4">Body Style: Z to A</option>
        <option value="5">Color: A to Z</option>
        <option value="6">Color: Z to A</option>
        <option value="7">Mileage: Low to High</option>
        <option value="8">Mileage: High to Low</option>
        <option value="9">Price: Low to High</option>
        <option value="10">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortSelector;
