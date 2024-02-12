import { CarouselContainer, SlideImg } from "./styles";

import vue_icon from "../../assets/logo/vue-svgrepo-com.svg";
import react_icon from "../../assets/logo/react-svgrepo-com.svg";
import type_icon from "../../assets/logo/typescript-svgrepo-com.svg";
import Git from "../../assets/logo/github-142-svgrepo-com.svg";
import Css from "../../assets/logo/css3-01-svgrepo-com.svg";
import Html from "../../assets/logo/html5-01-svgrepo-com.svg";
import JS from "../../assets/logo/js01-svgrepo-com.svg";
import SASS from "../../assets/logo/sass-svgrepo-com.svg";
import styledComponents from "../../assets/logo/styled-components-svgrepo-com.svg";
import redux from "../../assets/logo/redux-fill-svgrepo-com.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Tecnologias = {
  id: string;
  image: string;
};

const TecnologiasCarousel = () => {
  const dataTecnologias: Tecnologias[] = [
    { id: "1", image: vue_icon },
    { id: "2", image: react_icon },
    { id: "3", image: type_icon },
    { id: "4", image: Git },
    { id: "5", image: Css },
    { id: "6", image: Html },
    { id: "7", image: SASS },
    { id: "8", image: JS },
    { id: "9", image: styledComponents },
    { id: "10", image: redux },
  ];

  return (
    <CarouselContainer>
      <Swiper
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{ delay: 0 }}
        speed={3000}
        loop={true}
        slidesPerView={6}
        className="Swiper"
      >
        {dataTecnologias.map((item) => (
          <SwiperSlide className="SwiperSlide" key={item.id}>
            <SlideImg src={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default TecnologiasCarousel;
