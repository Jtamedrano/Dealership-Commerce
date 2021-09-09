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
