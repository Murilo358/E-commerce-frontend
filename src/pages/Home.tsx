import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ProductCard from "../components/productCard/ProductCard";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import ProductsSlider from "../components/productsSlider/ProductsSlider";

type Product = {
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

const Home = () => {
  const [data, setData] = useState<Product[] | []>([]);

  const { data: fetchedData, error } = useFetch<Product[]>(
    "http://localhost:8081/products/getAll"
  );

  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData);
    }
  }, [fetchedData]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          draggable={true}
          loop={true}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="image__slider__div">
              <img src="1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__slider__div">
              <img src="2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__slider__div">
              <img src="3.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mx-auto pt-10 pb-10 flex flex-col gap-16">
        <Card className="rounded-sm flex flex-col p-5 gap-4">
          <Typography variant="h5">Novos produtos</Typography>
          <ProductsSlider products={data} />
        </Card>

        <Card className="rounded-sm flex flex-col p-5 gap-4">
          <Typography variant="h5">Vistos recentemente</Typography>
          <ProductsSlider products={data} />
        </Card>
      </div>
    </>
  );
};

export default Home;
