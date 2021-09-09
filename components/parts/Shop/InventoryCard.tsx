import React from "react";
import { toIntPrice } from "../../../utils/toIntPrice";

interface Props {
  auto: Auto;
}

const InventoryCard: React.FC<Props> = ({ auto }) => {
  const {
    year,
    make,
    model,
    trim,
    gas_mileage,
    engine,
    transmission,
    drive,
    msrp,
    img_url,
    odo,
  } = auto;

  return (
    <div className="inv-card">
      <div className="inv-card__top">
        <div className="inv-card__img-container">
          <img src={img_url} alt={`${year} ${make} ${model} ${trim}`} />
        </div>
        <div className="inv-card__details">
          <div className="product-name">
            <p>
              {year} {make}
            </p>
            <p>
              {model} {trim}
            </p>
          </div>
          <div className="product-details">
            <div className="product-details__summary">
              <p>{toIntPrice(odo)} Miles</p>
              <p>
                {gas_mileage.city}/{gas_mileage.hwy} mpg City/Hwy
              </p>
              <p>{engine} Engine</p>
              <p>{transmission}</p>
              <p>{drive}</p>
            </div>
            <div className="product-details__pricing">
              <div>
                <p>MSRP</p>
                <p>
                  <strong>${toIntPrice(msrp)}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inv-card__bottom"></div>
    </div>
  );
};

export default InventoryCard;
