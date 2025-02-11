import { CategoryDto } from "./CategoryDto";
import { ProductView } from "./ProductView";
import { SellerSimpleDto } from "./SellerSimpleDto";

export interface ProductDto  {
    id: string;
    name: string;
    description: string;
    category: CategoryDto;
    createdAt: string;
    inventoryCount: number;
    price: number;
    seller: SellerSimpleDto;
    updatedAt: string;
    relatedProducts: ProductView[];
  };
