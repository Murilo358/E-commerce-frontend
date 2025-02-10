import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import { ProductDto } from "../../types/ProductDto";

const Seller = () => {
  const { id } = useParams();

  type map = Map<string, ProductDto[]>;

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
