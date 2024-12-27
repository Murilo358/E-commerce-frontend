import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import { Typography } from "@mui/material";
import ImageZoom from "react-image-zooom";

const Product = () => {
  type ProductType = {
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

  const { id } = useParams();

  const {
    data: product,
    isPending,
    error,
  } = useFetch<ProductType>(
    `${config.services.product_service}products/get/${id}`
  );

  if (isPending) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
      <div className="container mt-5 mx-auto p-20 bg-white  ">
        {product != null && (
          <>
            <div className="flex">
              <div className="w-3/5 p-4">
                <ImageZoom
                  width="1000rem"
                  height="auto"
                  src="/car.jpeg"
                  alt="ProductImage"
                  zoom="200"
                />
                <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400">
                    Descrição
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
              </div>
              <div className="w-2/5 flex flex-col  border border-gray-300 p-5 rounded-md gap-4">
                <Typography variant="h3">{product.name}</Typography>
                <Typography variant="h4">R${product.price}</Typography>
                <Typography variant="h6">
                  {product.inventoryCount} Disponiveis
                </Typography>
                <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
                  Comprar agora
                </button>
              </div>
            </div>
            <div>{product.description}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
