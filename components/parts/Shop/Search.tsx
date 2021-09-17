import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import clsx from "clsx";
import { RootState } from "../../../store";
import { sort } from "../../../store/reducers/inventoryReducer";
import SortSelector from "./SortDropdown";

interface Props {
  className: string;
}

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-between px-4 py-2 border-2 bg-blue-50 focus-within::bg-white">
      <input className="bg-blue-50" placeholder="Search out inventory..." />
      <SearchIcon />
    </div>
  );
};

const Search: React.FC<Props> = ({ className }) => {
  const inventoryCount = useSelector(
    ({ inventory }: RootState) => inventory.rootInventory.length
  );
  const parentClass = "search";
  const classes = clsx([parentClass, className]);
  return (
    <div className="w-full border-b-2 py-2 flex-col">
      {/* Search Bar */}
      {/* <SearchBar /> */}
      {/* Filter Button Menus */}

      <div className="flex justify-between">
        {/* Number of Vehicles */}
        <div className={`${parentClass}__vehicle-count`}>
          <p>{inventoryCount} Vehicles</p>
        </div>
        {/* View Type */}
        <div className={`${parentClass}__filter-options`}>
          {/* <div>
            <ListIcon /> | <ViewStreamIcon />
          </div> */}
          {/* Sort by */}
          <SortSelector />
        </div>
      </div>
    </div>
  );
};

export default Search;
