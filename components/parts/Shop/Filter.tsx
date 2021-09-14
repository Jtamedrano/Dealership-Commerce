import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countObjListByKey } from "../../../utils/toCatSet";
import { toIntPrice } from "../../../utils/toIntPrice";
import { wordSorterAid } from "../../../utils/wordSort";
import FilterCollapse from "./FilterCollapse";
import { Year } from "./filters";

interface Props {}

type CheckboxProp = InputHTMLAttributes<HTMLInputElement> & {
  item: keyof Auto;
  count: number;
};

const FilterCheckbox: React.FC<CheckboxProp> = ({ item, count, ...rest }) => (
  <div>
    <input {...rest} type="checkbox" id={`check-item-${item}`} />{" "}
    <label htmlFor={`check-item-${item}`}>
      {item} ({count})
    </label>
  </div>
);

const Filter = (props: Props) => {
  const { visibleInventory, makes, maxPrice, minPrice, models, filters } =
    useSelector(({ inventory }: RStore) => inventory);
  const dispatch = useDispatch();

  const onchangeRemove = (key: keyof filters, element: string) => {
    const ammendArray = filters[key] as string[];
    dispatch({
      type: "ADD_FILTER",
      payload: {
        [key]: ammendArray.filter((item: string) => item !== element),
      },
    });
  };
  const onchangeAdd = (key: keyof filters, item: string) => {
    console.log(filters);
    const ammendArray = filters[key] as string[];
    ammendArray.push(item);
    dispatch({
      type: "ADD_FILTER",
      payload: {
        [key]: ammendArray,
      },
    });
  };

  console.log(makes);

  return (
    <div className="filter">
      {/* Year */}
      <Year />
      {/* Make */}
      <FilterCollapse initialState={true} label="Make">
        <div>
          {makes.selected
            .sort((a, b) => wordSorterAid(a.item, b.item))
            .map(({ item, count }, i) => (
              <FilterCheckbox
                key={"make-filter-selected" + i + 1}
                item={item}
                count={count}
                checked
                onChange={(e) => onchangeRemove("make", item)}
              />
            ))}
          {makes.notSelected
            .sort((a, b) => wordSorterAid(a.item, b.item))
            .map(({ item }, i) => (
              <FilterCheckbox
                key={"make-filter-not-selected" + i + 1}
                item={item}
                count={0}
                onChange={(e) => onchangeAdd("make", item)}
              />
            ))}
          {makes.unavailable
            .sort((a, b) => wordSorterAid(a.item, b.item))
            .map(({ item }, i) => (
              <FilterCheckbox
                key={"make-filter-not-selected" + i + 1}
                item={item}
                count={0}
                disabled
              />
            ))}
        </div>
      </FilterCollapse>
      {/* Model */}
      <FilterCollapse initialState={true} label="Model">
        <div>
          {countObjListByKey(visibleInventory, "model").map((year, i) => (
            <div key={"model-filter-" + i + 1}>
              <input type="checkbox" />{" "}
              <label>
                {year[0]} ({year[1]})
              </label>
            </div>
          ))}
        </div>
      </FilterCollapse>
      {/* Price */}
      <FilterCollapse initialState={true} label="Price">
        <div className="filter__price">
          <div className="filter__number-input">
            <label htmlFor="">Min</label>
            <input
              type="number"
              max={maxPrice ? maxPrice - 1 : undefined}
              min={minPrice}
            />
            <small>Min: ${toIntPrice(minPrice)}</small>
          </div>
          <div className="filter__number-input">
            <label htmlFor="">Max</label>
            <input
              type="number"
              max={maxPrice}
              min={minPrice ? minPrice + 1 : undefined}
            />
            <small>Max: ${toIntPrice(maxPrice)}</small>
          </div>
        </div>
      </FilterCollapse>
      {/* Trim */}
      <FilterCollapse initialState={true} label="Trim">
        <div>
          {countObjListByKey(visibleInventory, "trim").map((year, i) => (
            <div key={"trim-filter-" + i + 1}>
              <input type="checkbox" />{" "}
              <label>
                {year[0]} {year[1]}
              </label>
            </div>
          ))}
        </div>
      </FilterCollapse>
      {/* Body Style */}
      <FilterCollapse initialState={true} label="Body">
        <div>
          {countObjListByKey(visibleInventory, "body").map((year, i) => (
            <div key={"trim-filter-" + i + 1}>
              <input type="checkbox" />{" "}
              <label>
                {year[0]} {year[1]}
              </label>
            </div>
          ))}
        </div>
      </FilterCollapse>
      {/* Drive Line */}
      <FilterCollapse initialState={true} label="Body">
        <div>
          {countObjListByKey(visibleInventory, "drive").map((year, i) => (
            <div key={"trim-filter-" + i + 1}>
              <input type="checkbox" />{" "}
              <label>
                {year[0]} {year[1]}
              </label>
            </div>
          ))}
        </div>
      </FilterCollapse>
    </div>
  );
};

export default Filter;
