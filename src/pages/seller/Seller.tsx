import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";

const Seller = () => {
  const { id } = useParams();

  type Category = {
    id: string;
    name: string;
    description: string;
  };

  type Seller = {
    name: string;
    newProductsLastMonth: number;
    newSalesLastMonth: number;
  };

  type ProductView = {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    createdAt: string;
    inventoryCount: number;
    price: number;
    sellerId: number;
    updatedAt: string;
  };

  type ProductType = {
    id: string;
    name: string;
    description: string;
    category: Category;
    createdAt: string;
    inventoryCount: number;
    price: number;
    seller: Seller;
    updatedAt: string;
    relatedProducts: ProductView[];
  };

  type map = Map<string, ProductType[]>;

  const {
    data: product,
    isPending,
    error,
  } = useFetch<map>(
    `${config.services.product_service}products/getBySellerId/${id}`
  );

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }
  return <div>{id}</div>;
};

export default Seller;
