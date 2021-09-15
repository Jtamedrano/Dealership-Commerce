declare type IAuto = {
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

interface CAuto {
  auto: IAuto;
  is: (key: keyof IAuto, data: IAuto[keyof IAuto]) => boolean;
}

declare type RInventoryStore = {
  rootInventory: CAuto[];
  filters: filters;
};

declare type RAction<T> = {
  type: T;
  payload?: any;
};
