import React from "react";
import { toIntPrice } from "../../../utils/toIntPrice";
interface Props {
  auto: IAuto;
}

const InventoryCard: React.FC<Props> = ({ auto }) => {
  const { year, make, model, msrp, trim, img_url } = auto;

  return (
    <div className="md:max-w-sm mx-auto w-full bg-white rounded-lg transition-shadow duration-500 ease-in-out shadow-md hover:shadow-lg overflow-hidden">
      <div className="grid grid-rows-card-layout h-full">
        <div className="w-full overflow-hidden border-b-4">
          <img
            className="h-full w-full object-cover"
            src={img_url}
            alt={`${year} ${make} ${model}`}
            height="100%"
            width="100%"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 place-content-center px-6 py-2">
          <div className="font-bold text-lg max-h-full col-span-2">
            <p className="text-xl">
              {year} {make}
            </p>
            <p>{model}</p>
          </div>
          <div className="font-semibold text-2xl text-right">
            <p>${toIntPrice(msrp)}</p>
          </div>
          <div className="col-span-2">
            <p>{trim}</p>
          </div>
          <div className="text-right">
            <p>{toIntPrice(auto.odo)} miles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
