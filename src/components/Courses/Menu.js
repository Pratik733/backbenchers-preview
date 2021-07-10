import React from 'react'

function Menu({ menuItem }) {
    return (
        <div className="item flex flex-wrap mb-16">
            {
                menuItem.map((item) => {
                    return (
                        <>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full item-con" key={item.id}>
                                <div class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.image} />
                                </div>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                    <p class="mt-1">{item.description}</p>
                                </div>
                            </div>
                            {/* <div className="item-con" key={item.id}>
                                <div className="item-container">
                                    <img src={item.image} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div> */}
                        </>
                    )
                })
            }
        </div>
    )
}

export default Menu;