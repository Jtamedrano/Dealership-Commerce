import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

const ViewSelector = (props: Props) => {
  const view = useSelector(
    ({ inventory }: RStore) => inventory.filters.condition
  );
  const dispatch = useDispatch();

  const handleChange = (input: string[]) => {
    dispatch({
      type: "CHANGE_FILTER_VIEW",
      payload: { views: input },
    });
  };

  console.log(view);
  return (
    <div className="shop__selector">
      <div className="shop__selector-item">
        <input
          type="radio"
          name="all"
          checked={view && view.includes("used", 1)}
          id="shopSelector1"
          onChange={() => handleChange(["new", "used"])}
        />{" "}
        <label htmlFor="shopSelector1">All</label>
      </div>
      <div className="shop__selector-item">
        <input
          type="radio"
          name="new"
          checked={view && view.length === 1 && view[0] === "new"}
          id="shopSelector2"
          onChange={() => handleChange(["new"])}
        />{" "}
        <label htmlFor="shopSelector2">New</label>
      </div>
      <div className="shop__selector-item">
        <input
          type="radio"
          name="used"
          checked={view && view.length === 1 && view[0] === "used"}
          id="shopSelector3"
          onChange={() => handleChange(["used"])}
        />{" "}
        <label htmlFor="shopSelector3">Used</label>
      </div>
    </div>
  );
};

export default ViewSelector;
