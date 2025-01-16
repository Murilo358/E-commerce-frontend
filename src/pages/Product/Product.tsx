import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import config from "../../config";
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ImageZoom from "react-image-zooom";
import { useState } from "react";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";

const Product = () => {
  const [quantity, setQuantity] = useState("1");

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

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
  };

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
              <div className="w-2/5 flex flex-col gap-7">
                <div className="flex flex-col  border border-gray-300 p-5 rounded-md gap-4">
                  <Typography variant="h3">{product.name}</Typography>
                  <Typography variant="h4">R${product.price}</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="quantity-select-label">
                      Quantidade
                    </InputLabel>
                    <Select
                      labelId="quantity-select-label"
                      value={quantity}
                      type="number"
                      label="Quantidade"
                      onChange={handleChange}
                    >
                      {Array.from(
                        { length: Math.min(product.inventoryCount, 5) },
                        (_, index) => (
                          <MenuItem key={index + 1} value={index + 1}>
                            {index + 1}
                          </MenuItem>
                        )
                      )}
                      {product.inventoryCount > 5 && (
                        <MenuItem value="more">Mais de 5 unidades</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                  <Typography variant="h6">
                    {product.inventoryCount} Disponiveis
                  </Typography>
                  <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
                    Comprar agora
                  </button>
                </div>
                <div className="flex flex-col  border border-gray-300 p-5 rounded-md gap-4">
                  <Typography variant="h5">
                    Vendido por {product?.seller?.name}
                  </Typography>
                  <Typography variant="h6">
                    + {product?.seller?.newProductsLastMonth} Novos produtos no
                    último mês
                  </Typography>
                  <Typography variant="h6">
                    + {product?.seller?.newSalesLastMonth} vendas no último mês
                  </Typography>
                  <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
                    Acesse a página do vendedor
                  </button>
                </div>
              </div>
            </div>
            <div>{product.description}</div>
            {product.relatedProducts != null &&
              product.relatedProducts.length > 0 && (
                <Card
                  key={product.id}
                  className="rounded-sm flex flex-col p-5 gap-4"
                >
                  <Typography variant="h5">Produtos relacionados </Typography>
                  <ProductsSlider products={product.relatedProducts} />
                </Card>
              )}
          </>
        )}
      </div>
    </>
  );
};

export default Product;
