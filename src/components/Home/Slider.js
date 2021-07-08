import React, { Component } from 'react';
import './Home.css'
import '../assets/images/home.svg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
    <img src="path-to-img" onDragStart={handleDragStart} />,
]

function CardData() {
    const rtn = [{
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    }, {
        url: 'https://dummyimage.com/100x100/',
        title: "CARNATIONS",
        desc: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
    },

    ]
    return rtn;
}

class Cards extends React.Component {
    render() {
        const cardData = CardData();
        return (

            <section>
                {
                    cardData.map((card, i) => {
                        return (
                            <>
                                <div className="xl:w-1/3 md:w-1/2 p-4 card" id="card" style={this.props.cardStyle} key={i}>
                                    <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                            <img src={card.url} />
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 title" >{card.title}</h2>
                                        <p className="leading-relaxed text-base desc">{card.desc}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        )
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: 0,
            position: 0,
            cardStyle: {
                transform: 'translateX(0px)'
            },
            width: 0,
        };
    }

    componentDidMount() {
        let boxWidth = document.getElementById("card").clientWidth;
        this.setState({ width: boxWidth });
    }

    // func: click the slider buttons
    handleClick(type) {
        // get the card's margin-right
        let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
        margin = JSON.parse(margin.replace(/px/i, ''));

        const cardWidth = this.state.width; // the card's width
        const cardMargin = margin; // the card's margin
        const cardNumber = CardData().length; // the number of cards
        let currentCard = this.state.currentCard; // the index of the current card
        let position = this.state.position; // the position of the cards

        // slide cards
        if (type === 'next' && currentCard < cardNumber - 1) {
            currentCard++;
            position -= (cardWidth + cardMargin);
        } else if (type === 'prev' && currentCard > 0) {
            currentCard--;
            position += (cardWidth + cardMargin);
        }
        this.setCard(currentCard, position);
    }

    setCard(currentCard, position) {
        this.setState({
            currentCard: currentCard,
            position: position,
            cardStyle: {
                transform: `translateX(${position}px)`
            }
        })
    }

    render() {
        return (
            <div className="cards-slider">
                <div className="slider-btns">
                    <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
                    <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
                </div>
                <Cards cardStyle={this.state.cardStyle} />
            </div>
        )
    }
}

export default Display;
