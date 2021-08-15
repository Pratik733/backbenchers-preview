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
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625585503/icons8-comments_kwbsuv.gif',
        title: "Bulletin Boards and Discussions",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625581167/icons8-teamwork_hbr8im.gif',
        title: "The Euphoria Army",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625580332/icons8-rocket_mbwdrr.gif',
        title: "Hands-on Mini/Major projects",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625585711/icons8-people_acaonz.gif',
        title: "Personal Mentors",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625579307/icons8-literature_jik1od.gif',
        title: "Library with no Boundaries",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625579091/icons8-leadership_kbfrvw.gif',
        title: "Highly Interactive Community",
    }, {
        url: 'https://res.cloudinary.com/dbozxizmw/image/upload/v1625578979/icons8-document_elakr5.gif',
        title: "Uniquely Designed Cheatsheets",
    },

    ]
    return rtn;
}

export default () => {
    const cardData = CardData();
    return (
        <Swiper
            infinite
            autoplay={
                {
                    "delay": 5000,
                    "disableOnInteraction": true
                }
            }
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={10}
            breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 4,
                    "spaceBetween": 50
                }
            }}
            onSwiper={
                (swiper) => console.log(swiper)}
            onSlideChange={
                () => console.log('slide change')} >
            <section> {
                cardData.map((card, i) => {
                    return (<SwiperSlide >
                        <div className="xl:w-1/3 md:w-1/2 card " id="card" key={i} >
                            <div class=" w-auto rounded-lg card-item flex items-center justify-between" >
                                <div class=" w-20 h-20 flex items-center justify-center rounded-full" >
                                    <img src={card.url}/> 
                                </div>
                                <h2 className="text-normal text-gray-900 font-normal title-font mb-2 ml-2 title text-left" > {card.title} </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })
            }
            </section>
        </Swiper>
    );
};