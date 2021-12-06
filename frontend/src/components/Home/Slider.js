import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Slider from "react-slick";
import arrowUp from './arrowUp.png'

const slowMo = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
      pauseOnHover: true,
  speed: 5000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function CardData() {
  const rtn = [
    {
      title: "Pending Doubts",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
    {
      title: "Practical Knowledge",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
    {
      title: "Logical Thinking",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/gain.png?alt=media&token=d38dbc6c-97b8-4282-8ecb-edb56aabcee5",
    },
    {
      title: "Pricing",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
{
      title: "Critical Thinking",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/gain.png?alt=media&token=d38dbc6c-97b8-4282-8ecb-edb56aabcee5",
    },
    {
      title: "Theoretical Knowledge",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
        {
      title: "Practical Knowledge",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
{
      title: "Output",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/gain.png?alt=media&token=d38dbc6c-97b8-4282-8ecb-edb56aabcee5",
    },
    {
      title: "Smart Work",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
{
      title: "Laziness",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/gain.png?alt=media&token=d38dbc6c-97b8-4282-8ecb-edb56aabcee5",
    },
    {
      title: "Energy",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
{
      title: "Gamified Learning",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/gain.png?alt=media&token=d38dbc6c-97b8-4282-8ecb-edb56aabcee5",
    },
    {
      title: "Meme Based Learning",
      src: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/down.png?alt=media&token=45104ab6-09e3-40cb-b080-e53090eff931",
    },
  ];
  return rtn;
}

export default () => {
  const cardData = CardData();
  return (
    <div className="container-1 overflow-hidden">
    <Slider {...slowMo} >
        {cardData.map((card, i) => {
          return (
              <div class="slider bg-gray-900 text-white text-center py-2" key={i}>
                <div class="h-full text-left flex items-center justify-center mx-4">
                  <h2 class="font-medium title-font tracking-wider text-sm">
                    {card.title}
                  </h2>
                  <img src={card.src} className="w-4 ml-4" />
                </div>
              </div>
          );
        })}
    </Slider>
    </div>
  );
};
