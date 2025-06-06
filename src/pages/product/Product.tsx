import { Link, useParams } from "react-router-dom";
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
import { ProductDto } from "../../types/ProductDto";

const Product = () => {
  const [quantity, setQuantity] = useState("1");

  const { id } = useParams();

  const {
    data: product,
    isPending,
    error,
  } = useFetch<ProductDto>(
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

  const createOrder = async (productId: string) => {
    //todo change to the realPayment method and buyerId
    await fetch(`${config.services.order_service}order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [{productId: productId, quantity: 1 }],
        paymentMethod: 1,
        buyerId: 1,
      }),
    });
  };

  return (
    <>
      <div className="container mt-5 mx-auto p-10 bg-white  ">
        {product != null && (
          <>
            <div className="flex">
              <div className="w-4/5 p-4">
                <ImageZoom
                  width="1000rem"
                  height="auto"
                  src="/car.jpeg"
                  alt="ProductImage"
                  zoom="200"
                />
                <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="text-center">
                  <h1 className="mb-4 text-3xl font-semibold leading-none tracking-tight text-gray-900  ">
                    Descrição
                  </h1>
                  <div className="min-h-96 text-left"> {product.description}</div>

                </div>
              </div>
              <div className="w-2/5 flex flex-col gap-7">
                <div className="flex flex-col  border border-gray-300 p-5 rounded-md gap-4">
                  <Typography variant="h4">{product.name}</Typography>
                  <Typography variant="h5">R${product.price}</Typography>
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
                  <Typography variant="subtitle1">
                    {product.inventoryCount} Restantes
                  </Typography>
                  <button
                    onClick={() => {
                      createOrder(product.id);
                    }}
                    className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
                  >
                    Comprar agora
                  </button>
                  <button className="bg-blue-300 -500 w-full hover:bg-blue-300 text-blue-700 font-bold py-4 px-4 rounded">
                    Adicionar ao carrinho
                  </button>
                </div>
                <div className="flex flex-col  border border-gray-300 p-5 rounded-md gap-4">
                  <Typography variant="h5">
                    Vendido por {product?.seller?.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    + {product?.seller?.newProductsLastMonth} Novos produtos no
                    último mês
                  </Typography>
                  <Typography variant="subtitle1">
                    + {product?.seller?.newSalesLastMonth} vendas no último mês
                  </Typography>
                  <Link to={"/seller/" + product?.seller?.id}>
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
                      Acesse a página do vendedor
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        
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
