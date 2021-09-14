declare type Auto = {
  year: number;
  make: string;
  model: string;
  trim: string;
  dealer_price: number;
  msrp: number;
  odo: number;
  transmission: string;
  gas_mileage: {
    city: number;
    hwy: number;
    combo: number;
  };
  engine: string;
  drive: string;
  fuel: string;
  vin: string;
  condition: string;
  img_url: string;
  [key: string]: string | number;
};

declare type filters = {
  year?: [number, number];
  make?: string[];
  model?: string[];
  trim?: string[];
  dealer_price?: [number, number];
  msrp?: [number, number];
  odo?: [number, number];
  transmission?: string[];
  drive?: string[];
  fuel?: string[];
  condition?: string[];
  [key: string]: string[] | [number, number];
};

declare type RStore = {
  inventory: RInventoryStore;
};

type selectCount = { item: string; count: number }[];

declare type RInventoryStore = {
  rootInventory: Auto[];
  visibleInventory: Auto[];
  filters: filters;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  minYear: number | undefined;
  maxYear: number | undefined;
  makes: {
    selected: selectCount;
    notSelected: selectCount;
    unavailable: selectCount;
  };
  models: {
    selected: selectCount;
    notSelected: selectCount;
  };
};

declare type RAction<T> = {
  type: T;
  payload?: any;
};

declare type RInventoryTypes = "ADD_FILTER" | "CHANGE_FILTER_VIEW";
