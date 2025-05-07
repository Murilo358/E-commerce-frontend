import { ProductDto } from "./ProductDto";
import { ProductView } from "./ProductView";

export interface SellerDto  {
    content: {
      sellerName: string,
      sellersProducts:  Record<string, ProductView[]>
    },
    pageNumber: number,
    pageSize: number,

  };
