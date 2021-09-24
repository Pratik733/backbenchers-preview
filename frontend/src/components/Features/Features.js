import React, { useState, useEffect } from "react";
import "./Features.css";
import data from "./data";
import { Helmet } from "react-helmet";

const Features = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="features-main">
      <div className="features-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>GenieGradz | Features</title>
          <link rel="canonical" href="https://geniegradz.com/features" />
        </Helmet>
        <section class="text-black body-font">
          <div class="features-container px-5 py-24">
            <div class="flex flex-wrap mt-10">
              {items.slice(0, visible).map((data) => (
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden feature-card">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={data.src}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h1 class="title-font text-lg font-medium text-purple mb-3">
                        {data.title}
                      </h1>
                      <p class="leading-relaxed mb-3">{data.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              class="flex mx-auto my-10 bg-cyan border-0 py-2 px-8 focus:outline-none rounded text-lg"
              onClick={showMoreItems}
            >
              Load More
            </button>
          </div>
        </section>
        <div className="feature-circle"></div>
        <div className="small-circle"></div>
      </div>
    </div>
  );
};

export default Features;
