import CardProject from "../../Components/CardProjects";
import { ContainerProjects } from "./styles";
import { CardModels } from "../../Models/CardsObjects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const ProjectsSection = () => {
  return (
    <>
      <ContainerProjects>
        <h2>Projetos</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={"auto"}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <div className="Cards">
            {CardModels.map((e) => (
              <SwiperSlide className="container">
                <CardProject
                  key={e.id}
                  id={e.id}
                  description={e.description}
                  img={e.img}
                  link={e.link}
                  title={e.title}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </ContainerProjects>
    </>
  );
};

export default ProjectsSection;
