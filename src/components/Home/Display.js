import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper/core'

SwiperCore.use([Autoplay, Navigation, Pagination]);

// install Swiper modules

function CardData() {
    const rtn = [{
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625581957/icons8-developer_gfnfqx.gif',
        title: "Eureka - Euphorian",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625585503/icons8-comments_kwbsuv.gif',
        title: "Bulletin Boards and Discussions",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625581167/icons8-teamwork_hbr8im.gif',
        title: "The Euphoria Army",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625580332/icons8-rocket_mbwdrr.gif',
        title: "Hands-on Mini/Major projects",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625585711/icons8-people_acaonz.gif',
        title: "Personal Mentors",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625579307/icons8-literature_jik1od.gif',
        title: "Library with no Boundaries",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625579091/icons8-leadership_kbfrvw.gif',
        title: "Highly Interactive Community",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625578979/icons8-document_elakr5.gif',
        title: "Uniquely Designed Cheatsheets",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    },

    ]
    return rtn;
}

export default () => {
    const cardData = CardData();
    return (
        <Swiper autoplay={
            {
                "delay": 5000,
                "disableOnInteraction": true
            }
        }
            loop={true}
            pagination={{ clickable:true}}
            spaceBetween={10}
            slidesPerView={3.25}
            onSwiper={
                (swiper) => console.log(swiper)}
            onSlideChange={
                () => console.log('slide change')} >
            <section> {
                cardData.map((card, i) => {
                    return (<SwiperSlide >
                        <div className="xl:w-1/3 md:w-1/2 p-4 card " id="card" key={i} >
                            <div class="border border-gray-200 p-6 rounded-lg card-item  " >
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4" >
                                    <img src={card.url} /> </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 title" > {card.title} </h2> <p className="leading-relaxed text-base desc" > {card.desc} </p>  </div>
                        </div>
                    </SwiperSlide>
                    )
                })
            }
            </section>
        </Swiper>
    );
};