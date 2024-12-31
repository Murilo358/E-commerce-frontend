import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import ProductsSlider from "../../components/productsSlider/ProductsSlider";
import config from "../../config";

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

type Categories = Record<string, Product[]>;

type HomePageProducts = {
  products: Categories;
};

const Home = () => {
  const [state, setState] = useState<{
    newestsProducts: Product[];
    groupedBy: HomePageProducts | null;
    error: string | null;
  }>({
    newestsProducts: [],
    groupedBy: null,
    error: null,
  });

  const { data: fetchedNewestsProducts, error: newestsError } = useFetch<
    Product[]
  >(`${config.services.product_service}products/getAll?sort=createdAt,desc`);

  const { data: fetchedGroupedBy, error: groupedByError } =
    useFetch<HomePageProducts>(
      `${config.services.product_service}products/homepage?sort=createdAt,desc`
    );

  useEffect(() => {
    setState({
      newestsProducts: fetchedNewestsProducts || [],
      groupedBy: fetchedGroupedBy || null,
      error: newestsError || groupedByError || null,
    });
  }, [fetchedNewestsProducts, fetchedGroupedBy, newestsError, groupedByError]);

  if (state.error) {
    return <div>Erro: {state.error}</div>;
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
              <img src="1.png" alt="slider image 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__slider__div">
              <img src="2.png" alt="slider image 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image__slider__div">
              <img src="3.png" alt="slider image 3" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mx-auto pt-10 pb-10 flex flex-col gap-16">
        <Card className="rounded-sm flex flex-col p-5 gap-4">
          <Typography variant="h5">Novos produtos</Typography>
          <ProductsSlider products={state.newestsProducts} />
        </Card>

        {state.groupedBy && (
          <>
            {Object.keys(state.groupedBy.products).map((key) =>
              state.groupedBy != null &&
              state.groupedBy.products[key]?.length ? (
                <Card key={key} className="rounded-sm flex flex-col p-5 gap-4">
                  <Typography variant="h5">{key}</Typography>
                  <ProductsSlider products={state.groupedBy.products[key]} />
                </Card>
              ) : null
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
