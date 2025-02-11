import { ProductDto } from "./ProductDto";
import { ProductView } from "./ProductView";

export interface SellerDto  {
    sellerName: string;
    sellersProducts:  Record<string, ProductView[]>;
  };
