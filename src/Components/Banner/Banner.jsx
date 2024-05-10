import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('a')}
      loop={true}
    >
      <SwiperSlide>
        <div className="relative text-[#FEFAF6] bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/1QMdbPz/b-1-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-luckiestGuy font-bold mb-4">Explore a World of Knowledge</h1>
              <p className="text-lg">Discover captivating stories and insightful resources</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#453F78]">Explore</button>
                <button className="btn btn-secondary border-none bg-[#795458]">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative text-[#FEFAF6] bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/1GK1SD4/b-2-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-luckiestGuy font-bold mb-4">Embark on Literary Journeys</h1>
              <p className="text-lg">Experience the magic of books and the joy of reading</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#453F78]">Explore</button>
                <button className="btn btn-secondary border-none bg-[#795458]">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative text-[#FEFAF6] bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/VVTc4Ns/b-3-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-luckiestGuy font-bold mb-4">Discover Boundless Stories</h1>
              <p className="text-lg">Unlock the doors to imagination and endless learning</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#453F78]">Explore</button>
                <button className="btn btn-secondary border-none bg-[#795458]">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative text-[#FEFAF6] bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/Ns3WmPB/b-4-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-luckiestGuy font-bold mb-4">Immerse Yourself in Knowledge</h1>
              <p className="text-lg">Dive into a world of ideas and exploration</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#453F78]">Explore</button>
                <button className="btn btn-secondary border-none bg-[#795458]">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;

