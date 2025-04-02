import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import { SellerDto } from "../../types/SellerDto";
import { Pagination, Typography } from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";

const Seller = () => {
  const { id } = useParams();
  const [page, setPage] = useState(0);

  const {
    data: seller,
    isPending,
    error,
  } = useFetch<SellerDto>(
    `${config.services.product_service}products/getBySellerId/${id}?page=${page}`
  );

  if (isPending) return <div>Carregando...</div>;

  if (error) {
    return (
      <div className="text-red-500 text-lg font-bold">
        Ocorreu um erro ao carregar os produtos. Tente novamente mais tarde.
      </div>
    );
  }


  const handlePaginationChange = (
    _: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10">
      <div className="container gap-5">
        {/* Card do Vendedor */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded shadow-lg mb-5">
          <div className="flex justify-center border-b-2 border-gray-400">
            <img
              className="h-[300px] w-100"
              src="/sellers_background.svg"
              alt="Banner do Vendedor"
            />
          </div>
          <div className="flex items-center gap-3 pt-3 mb-2">
            <img
              className="rounded-full"
              src="/profile.jpg"
              width={150}
              height={150}
              alt="Logo do vendedor"
            />
            {seller?.sellerName && (
              <Typography variant="h2" color="white">
                {seller.sellerName}
              </Typography>
            )}
          </div>
        </div>

        {/* Lista de Produtos */}
        {seller?.sellersProducts && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
            {Object.values(seller.sellersProducts)
              .flat()
              .map((product) => (
                <ProductCard
                  key={product.id}
                  currentPrice={product.price}
                  id={product.id}
                  oldPrice="25,00"
                  productName={product.name}
                  imageUrl="/switch.jpeg"
                  height={400}
                />
              ))}
          </div>
        )}
      </div>

      <Pagination
        page={page + 1}
        onChange={handlePaginationChange}
        count={10}
        variant="outlined"
      />
    </div>
  );
};

export default Seller;
