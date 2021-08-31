import React from 'react'
import ReadMoreReact from 'read-more-react';

function Menu({ menuItem }) {
    return (
        <div className="item flex flex-wrap">
            {
                menuItem.map((item) => {
                    return (
                        <div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full item-con" key={item.id}>
                                <div class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.image} />
                                </div>
                                <div class="mt-4 h-auto">
                                    <h3 class="text-gray-700 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                    <h2 class="text-cyan title-font text-lg font-medium">{item.title}</h2>
                                    <ReadMoreReact className='text-white' text={item.description}
                                        min={100}
                                        ideal={150}
                                        max={200}
                                        readMoreText="Read more.." />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu;