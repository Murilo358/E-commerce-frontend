import { CategoryDto } from "./CategoryDto";
import { ProductView } from "./ProductView";
import { SellerDto } from "./SellerDto";

export interface ProductDto  {
    id: string;
    name: string;
    description: string;
    category: CategoryDto;
    createdAt: string;
    inventoryCount: number;
    price: number;
    seller: SellerDto;
    updatedAt: string;
    relatedProducts: ProductView[];
  };
