import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { EffectFade, Parallax } from "swiper/core";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, Pagination]);

function CardData() {
  const rtn = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(5).png?alt=media&token=c0a0d39b-f022-43bc-902f-2983737f2859",
      title: "Tanishq Saha",
      desc: "Learning a new coding language can be a hitch sometimes. Learning with GenieGradz was a experience on its own! Young and dynamic trainers,super friendly and professional staff leave no stone unturned to help you in the learning experience! I was able to code , run them smoothly and create project , a complete new language through the program. Hands down to the best coding school.",
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(6).png?alt=media&token=7d3978b5-8fea-4cf8-940e-47cc383e85a4",
        title: "Sakshi T.",
        desc: "I had enrolled for Java beginners course in beta testing. It wasn't my first attempt to learn java programming. I had tried learning it before through various sources but couldn't really get a hang of it because of the way it's taught. But the experience of learning Java with Mainak sir was honestly far beyond my expectations.he ensured that we really understand each and every small syntax,loops and he didn't mind repeating it n number of times.Looking forward to countinue with GenieGradz for futher deep understanding.",
      },    {
        url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(7).png?alt=media&token=ecaec585-5580-48c7-9b2e-9cb5533814b7",
        title: "Shailey M. ",
        desc: "Hello i am a Shailey and i have completed with the basic of python programming. Learning of python programming from Anwesh sir was a delight for me . I am really happy to complete the course and perform those live project with GenieGradz. It was a amazing experience throughout Thank's to Anwesh sir for making it easy and simple. Thank you soo much.",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/geniegradz-b7d61.appspot.com/o/testimonial%2Ftestimonials%20(8).png?alt=media&token=36aaf57d-7de8-428e-bac2-8351b0138ebd",
        title: "Atharva B.",
        desc: "I am glad to start my journey of learning Python with GenieGradz. My experience has been extremely amazing. The team at GenieGradz is very prompt and swift and is doing great job while keeping up with the quality of education they provide through their highly qualified tutors. Special shoutout and credits to someone for being a fantastic tutor. Looking forward to learning more with tln Kudos to the team!",
      },
  ];
  return rtn;
}

export default () => {
  const cardData = CardData();
  return (
    <Swiper
      infinite
      autoplay={{
        disableOnInteraction: true,
      }}
      module={[EffectFade, Parallax]}
      effect="fade"
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={5}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <section>
        {" "}
        {cardData.map((card, i) => {
          return (
            <SwiperSlide>
              <div class="mb-10 p-10 test-item" key={i} >
                <div class="h-full text-center">
                  <img
                    alt="testimonial"
                    class="w-24 h-24 mb-5 object-cover object-center rounded-full inline-block border-1 border-yellow-500 shadow-md"
                    src={card.url}
                  />
                  <p class="leading-relaxed">
                    {card.desc}
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {card.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </section>
    </Swiper>
  );
};
