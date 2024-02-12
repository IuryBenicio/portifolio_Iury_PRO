import styled from "styled-components";

export const CarouselContainer = styled.div`
  .Swiper {
    width: 75%;
  }
  .SwiperSlide {
    transition-timing-function: linear;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
    margin-right: auto;
  }
`;

export const SlideImg = styled.img`
  max-width: 50%;
  max-height: 50%;
  color: white;
`;
