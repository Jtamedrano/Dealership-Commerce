import React from "react";

interface Props {}

const ViewSelector = (props: Props) => {
  return (
    <div className="shop__selector">
      <div className="shop__selector-item">
        <input type="radio" name="" id="shopSelector1" />{" "}
        <label htmlFor="shopSelector1">All</label>
      </div>
      <div className="shop__selector-item">
        <input type="radio" name="" id="shopSelector2" />{" "}
        <label htmlFor="shopSelector2">New</label>
      </div>
      <div className="shop__selector-item">
        <input type="radio" name="" id="shopSelector3" />{" "}
        <label htmlFor="shopSelector3">Used</label>
      </div>
    </div>
  );
};

export default ViewSelector;
