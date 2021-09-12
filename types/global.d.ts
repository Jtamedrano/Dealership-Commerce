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
  [key: string]: any;
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
  gas_mileage?: {
    city?: [number, number];
    hwy?: [number, number];
    combo?: [number, number];
  };
  engine?: string[];
  drive?: string[];
  fuel?: string[];
  condition?: "new" | "used" | "salvaged";
  [key: string]: any;
};

declare type RStore = {
  inventory: RInventoryStore;
};

declare type RInventoryStore = {
  rootInventory: Auto[];
  visibleInventory: Auto[];
  filters: filters;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  minYear: number | undefined;
  maxYear: number | undefined;
};

declare type RAction<T> = {
  type: T;
  payload?: any;
};

declare type RInventoryTypes = "ADD_FILTER";
