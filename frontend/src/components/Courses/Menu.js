import React from "react";
import ReadMoreReact from "read-more-react";

function Menu({ menuItem }) {
  return (
    <div>
      <div className="container">
        <div className="row item">
            {menuItem.map((item) => {
              return (
                <div className='col-lg-4'>
                  <div
                    class="item-con"
                    key={item.id}
                  >
                    <div class="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={item.image}
                      />
                    </div>
                    <div class="mt-4 h-auto">
                      <h3 class=" text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 class="title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <ReadMoreReact
                        className="text-white"
                        text={item.description}
                        min={100}
                        ideal={150}
                        max={200}
                        readMoreText="Read more.."
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default Menu;
