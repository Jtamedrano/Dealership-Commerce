import React from "react";
import { useSelector } from "react-redux";
import { countObjListByKey } from "../../../utils/toCatSet";
import { toIntPrice } from "../../../utils/toIntPrice";
import FilterCollapse from "./FilterCollapse";
import { Year } from "./filters";

interface Props {}

const Filter = (props: Props) => {
  const inventory = useSelector(({ inventory }: RStore) => inventory);
  return (
    <div className="filter">
      {/* Year */}
      <Year />
      {/* Make */}
      <FilterCollapse initialState={true} label="Make">
        <div>
          {countObjListByKey(inventory.visibleInventory, "make").map(
            (year, i) => (
              <div key={"make-filter-" + i + 1}>
                <input type="checkbox" />{" "}
                <label>
                  {year[0]} {year[1]}
                </label>
              </div>
            )
          )}
        </div>
      </FilterCollapse>
      {/* Model */}
      <FilterCollapse initialState={true} label="Model">
        <div>
          {countObjListByKey(inventory.visibleInventory, "model").map(
            (year, i) => (
              <div key={"model-filter-" + i + 1}>
                <input type="checkbox" />{" "}
                <label>
                  {year[0]} ({year[1]})
                </label>
              </div>
            )
          )}
        </div>
      </FilterCollapse>
      {/* Price */}
      <FilterCollapse initialState={true} label="Price">
        <div className="filter__price">
          <div className="filter__number-input">
            <label htmlFor="">Min</label>
            <input
              type="number"
              max={inventory.maxPrice ? inventory.maxPrice - 1 : undefined}
              min={inventory.minPrice}
            />
            <small>Min: ${toIntPrice(inventory.minPrice)}</small>
          </div>
          <div className="filter__number-input">
            <label htmlFor="">Max</label>
            <input
              type="number"
              max={inventory.maxPrice}
              min={inventory.minPrice ? inventory.minPrice + 1 : undefined}
            />
            <small>Max: ${toIntPrice(inventory.maxPrice)}</small>
          </div>
        </div>
      </FilterCollapse>
      {/* Trim */}
      <FilterCollapse initialState={true} label="Trim">
        <div>
          {countObjListByKey(inventory.visibleInventory, "trim").map(
            (year, i) => (
              <div key={"trim-filter-" + i + 1}>
                <input type="checkbox" />{" "}
                <label>
                  {year[0]} {year[1]}
                </label>
              </div>
            )
          )}
        </div>
      </FilterCollapse>
      {/* Body Style */}
      <FilterCollapse initialState={true} label="Body">
        <div>
          {countObjListByKey(inventory.visibleInventory, "body").map(
            (year, i) => (
              <div key={"trim-filter-" + i + 1}>
                <input type="checkbox" />{" "}
                <label>
                  {year[0]} {year[1]}
                </label>
              </div>
            )
          )}
        </div>
      </FilterCollapse>
      {/* Drive Line */}
      <FilterCollapse initialState={true} label="Body">
        <div>
          {countObjListByKey(inventory.visibleInventory, "drive").map(
            (year, i) => (
              <div key={"trim-filter-" + i + 1}>
                <input type="checkbox" />{" "}
                <label>
                  {year[0]} {year[1]}
                </label>
              </div>
            )
          )}
        </div>
      </FilterCollapse>
    </div>
  );
};

export default Filter;
