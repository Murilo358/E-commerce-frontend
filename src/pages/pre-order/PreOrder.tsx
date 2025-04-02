import { Typography } from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";

//TODO CREATE ON BACKEND A PRE OREDER, OR SOME WAY TO GET THOSE PRODUCTS

const products = [
  {
    id: "",
    name: "",
    description: "",
    categoryId: "",
    createdAt: "",
    inventoryCount: 10,
    price: 10,
    sellerId: 10,
    updatedAt: "",
  },
  {
    id: "",
    name: "",
    description: "",
    categoryId: "",
    createdAt: "",
    inventoryCount: 10,
    price: 10,
    sellerId: 10,
    updatedAt: "",
  },
];

const PreOrder = () => {
  return (
    <div className=" w-100 flex  justify-center">
      <div className="flex container">
        <div className=" w-4/5">
          <Typography variant="h5">Produtos</Typography>
          <div>
            {products.map((product) => (
              <>
                <ProductCard
                  height={350}
                  id={product.id}
                  currentPrice={product.price}
                  productName={product.name}
                  imageUrl="/switch.jpeg"
                />
              </>
            ))}
          </div>
        </div>
        <div className="flex w-1/5">
          <Typography variant="h5">Resumo do pedido</Typography>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
