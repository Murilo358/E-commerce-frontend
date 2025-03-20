import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import { SellerDto } from "../../types/SellerDto";
import { Pagination, Typography } from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";

const Seller = () => {
  const { id } = useParams();
  const [page, setPage] = useState(0);

  const fetchOptions = useMemo(() => ({}), []);

  const {
    data: seller,
    isPending,
    error,
  } = useFetch<SellerDto>(
    `${config.services.product_service}products/getBySellerId/${id}?page=${page}`,
    fetchOptions,
    [page, id]
  );

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const handlePaginationChange = (event: any, newPage: number) => {
    setPage(newPage - 1);
  };

  return (
    <div className=" flex flex-col items-center justify-center gap-5 p-10 ">
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
                : null
            )}
          </div>
        )}
      </div>
      <Pagination
        onChange={handlePaginationChange}
        count={10}
        variant="outlined"
      />
    </div>
  );
};

export default Seller;
