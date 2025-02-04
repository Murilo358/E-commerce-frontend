import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";

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

type ProductsSliderProps = {
  products: Product[];
};

const ProductsSlider: React.FC<ProductsSliderProps> = ({ products }) => {
  return (
    <div>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        draggable={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1540: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {products.length > 0 &&
          products.map((product: Product) => (
            <SwiperSlide key={product.id}>
              <Link to={"/Product/" + product.id}>
                <ProductCard
                  currentPrice={product.price}
                  oldPrice="25,00"
                  productName={product.name}
                  imageUrl="public/switch.jpeg"
                  height={400}
                  className="grid-item"
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
