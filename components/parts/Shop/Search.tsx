import React from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import clsx from "clsx";

interface Props {
  className: string;
}

const Search: React.FC<Props> = ({ className }) => {
  const inventoryCount = useSelector(
    ({ inventory }: RStore) => inventory.visibleInventory.length
  );
  const parentClass = "search";
  const classes = clsx([parentClass, className]);
  return (
    <div className={classes}>
      {/* Search Bar */}
      <div className={`${parentClass}__searchBar`}>
        <input placeholder="Search out inventory..." />
        <SearchIcon />
      </div>
      <div className={`${parentClass}__filter-details`}>
        {/* Number of Vehicles */}
        <div className={`${parentClass}__vehicle-count`}>
          <p>{inventoryCount} Vehicles</p>
        </div>
        {/* View Type */}
        <div className={`${parentClass}__filter-options`}>
          <div>
            <ListIcon /> | <ViewStreamIcon />
          </div>
          {/* Sort by */}
          <div className={`${parentClass}__sorter`}>
            <select name="filter-selector" id="filter-selector">
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
        </div>
      </div>
    </div>
  );
};

export default Search;
