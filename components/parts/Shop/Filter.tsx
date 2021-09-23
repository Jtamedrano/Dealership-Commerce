import { Menu, Transition } from "@headlessui/react";
import { Slider } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React, {
  ChangeEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import { AppDispatch, RootState } from "../../../store";
import { getMinMax } from "../../../utils/getMinMax";
import { countObjListByKey } from "../../../utils/toCatSet";
import { toIntPrice } from "../../../utils/toIntPrice";
import { wordSorterAid } from "../../../utils/wordSort";
import { Year } from "./filters";

interface Props {}

const Filter = (props: Props) => {
  const state = useSelector(
    (state: RootState) => state.inventory.rootInventory
  );
  const initialState = getMinMax(state, "msrp");
  const [value, setValue] = useState<number[] | [number, number]>(
    () => initialState
  );

  const dispatch = useDispatch<AppDispatch>()
  
  const handleChange = (_: any, v: number | number[]) => {
    if (typeof v === "object") {
      setValue(v.map((n: number) => n * 1000));
    }
  };

  const reset = () => {
    setValue(initialState);
  };
  return (
    <Menu as="div" className="relative">
      <div className="flex gap-4 mb-3">
        {/* Filter Button Dropdown */}
        <Menu.Button className="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          PRICE <ArrowDropDown aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-full z-10 bg-white">
          <div className="px-4 py-2 border border-gray-400">
            <div className="px-2 pb-1">
              <h2 className="font-semibold text-2xl">Price</h2>
            </div>
            <hr />
            <div className="px-2 pt-2">
              <div className="flex justify-between items-center">
                <p>PRICE RANGE</p>
                <div className="flex items-center">
                  <span
                    onClick={reset}
                    className="mr-2 text-blue-400 hover:text-blue-500 cursor-pointer"
                  >
                    Reset
                  </span>
                  <NumberFormat
                    value={value[0]}
                    displayType="text"
                    thousandSeparator
                    renderText={(formVal) => (
                      <div className="border-2 px-2 py-1 rounded-md">
                        <span>$</span>
                        <input
                          className="w-20 focus:outline-none"
                          value={formVal}
                          onChange={(e) =>
                            setValue([
                              parseInt(e.target.value.replaceAll(",", "")),
                              value[1],
                            ])
                          }
                        />
                      </div>
                    )}
                  />
                  <span className="mx-2">&#8212;</span>
                  <NumberFormat
                    value={value[1]}
                    displayType="text"
                    thousandSeparator
                    renderText={(formVal) => (
                      <div className="border-2 px-2 py-1 rounded-md">
                        <span>$</span>
                        <input
                          className="w-20 focus:outline-none"
                          value={formVal}
                          max="125000"
                          onChange={(e) =>
                            setValue([
                              value[0],
                              parseInt(e.target.value.replaceAll(",", "")),
                            ])
                          }
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
              <Slider
                min={0}
                max={125}
                step={0.5}
                valueLabelDisplay="auto"
                value={value.map((val) => val * 0.001)}
                onChange={handleChange}
              />
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Filter;
