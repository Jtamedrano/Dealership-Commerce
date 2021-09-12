import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterCollapse from "../FilterCollapse";

const Year: React.FC = () => {
  const [minYear, maxYear] = useSelector(({ inventory }: RStore) => [
    inventory.minYear,
    inventory.maxYear,
  ]);
  const [value, setValue] = useState(() => [minYear, maxYear]);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "0") {
      setValue([e.target.valueAsNumber, value[1]]);
    } else {
      setValue([value[0], e.target.valueAsNumber]);
    }
  };
  const handleOnBlur = () => {
    console.log("blurred");
    dispatch({ type: "ADD_FILTER", payload: { year: value } });
  };

  return (
    <FilterCollapse initialState={true} label="Year">
      <div className="filter__year">
        <div className="filter__number-input">
          <label htmlFor="minYear">Min</label>
          <input
            id="minYear"
            type="number"
            max={maxYear}
            min={minYear}
            name="0"
            value={value[0]}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {minYear && <small>Oldest: {minYear}</small>}
        </div>
        <div className="filter__number-input">
          <label htmlFor="maxYear">Max</label>
          <input
            id="maxYear"
            type="number"
            max={maxYear}
            min={minYear}
            name="1"
            value={value[1]}
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          {maxYear && <small>Newest: {maxYear}</small>}
        </div>
      </div>
    </FilterCollapse>
  );
};

export default Year;
