import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import { ProductDto } from "../../types/ProductDto";
import { SellerSimpleDto } from "../../types/SellerSimpleDto";
import { SellerDto } from "../../types/SellerDto";
import { Card, Typography } from "@mui/material";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

const Seller = () => {
  const { id } = useParams();

  const {
    data: seller,
    isPending,
    error,
  } = useFetch<SellerDto>(
    `${config.services.product_service}products/getBySellerId/${id}`
  );

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  console.log(seller);
  return (
    <div className=" flex flex-col items-center justify-center  p-10 ">
      <div className=" container gap-5">
        {seller?.sellerName && (
          <div>
            <Typography variant="h2">{seller.sellerName}</Typography>
          </div>
        )}

        {seller?.sellersProducts && (
          <>
            {Object.keys(seller?.sellersProducts).map((key) =>
              seller?.sellersProducts[key]?.length ? (
                <Card key={key} className="rounded-sm flex flex-col p-5 gap-4">
                  <Typography variant="h5">{key}</Typography>
                  <ProductsSlider products={seller.sellersProducts[key]} />
                </Card>
              ) : null
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Seller;
