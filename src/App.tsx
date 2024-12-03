import './App.scss'
import Header from './components/header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ProductCard from './components/productCard/ProductCard';


function App() {

  return (
    <>
      <Header/>
     <div className=' image__slider'>
     <Swiper className='image__slider'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='image__slider__div'>
        <img src="1.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image__slider__div'>
        <img src="2.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='image__slider__div'>
        <img src="3.png" alt="" />
        </div>
      </SwiperSlide>
  
    </Swiper>
     </div>
     <div className='container'>
     <div style={{marginTop: 100}} className="grid-container">
        <ProductCard currentPrice='50,00' oldPrice='25,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' oldPrice='25,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' oldPrice='25,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' oldPrice='25,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' oldPrice='25,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
        <ProductCard currentPrice='50,00' oldPrice='25,00' productName='Nintendo switch' imageUrl='switch.jpeg' className="grid-item"/>
    </div>
     </div>
    </>
    
  )
}

export default App
