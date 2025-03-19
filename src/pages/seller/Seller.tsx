import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import { SellerDto } from "../../types/SellerDto";
import { Typography } from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";

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
      <div className="container gap-5">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-gray-100 p-5 rounded overflow-hidden shadow-lg mb-5">
          <div className="items-center flex justify-center border-b-2 border-gray-400">
            <img
              className="h-[300px] w-100"
              src="/sellers_background.svg"
              alt=" dasdasdas"
            />
          </div>
          <div className=" flex items-center gap-3 pt-3 mb-2">
            <img
              className="rounded-full"
              src="/profile.jpg"
              width={150}
              height={150}
              alt="Logo do vendedor"
            />
            {seller?.sellerName && (
              <div className="text-white">
                <Typography variant="h2">{seller.sellerName}</Typography>
              </div>
            )}
          </div>
        </div>

        {seller?.sellersProducts && (
          <div className="grid grid-cols-5 gap-7">
            {Object.keys(seller?.sellersProducts).map((key) =>
              seller?.sellersProducts[key]?.length
                ? seller.sellersProducts[key].map((value) => (
                    <ProductCard
                      currentPrice={value.price}
                      id={value.id}
                      oldPrice="25,00"
                      productName={value.name}
                      imageUrl="/switch.jpeg"
                      height={400}
                      className="grid-item"
                    />
                  ))
                : // <Card key={key} className="rounded-sm flex flex-col p-5 gap-4">
                  //   <Typography variant="h5">{key}</Typography>
                  //   <ProductsSlider products={seller.sellersProducts[key]} />
                  // </Card>
                  null
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Seller;
