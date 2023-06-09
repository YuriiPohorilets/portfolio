import { ProjectsItem } from 'components/ProjectsItem/ProjectsItem';
import { projectsList } from 'data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';

export const ProjectsList = () => {
  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      spaceBetween={40}
      slidesPerView={1}
      grabCursor={true}
      scrollbar={{ draggable: true }}
      style={{ paddingBottom: '50px' }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {projectsList.map(({ title, type, skillSet, img, description, sourceCode, livePageUrl }) => {
        return (
          <SwiperSlide key={title}>
            <ProjectsItem
              title={title}
              type={type}
              img={img}
              skillSet={skillSet}
              description={description}
              sourceCode={sourceCode}
              livePageUrl={livePageUrl}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
