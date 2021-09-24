import React from 'react';
import { Helmet } from 'react-helmet';

const REfund = () => {
    return (
        <div className="container lg:px-20 lg:py-24 md:px-10 px-0 py-24 mt-4 pb-8 bg-white">
                  <Helmet>
        <meta charSet="utf-8" />
        <title>GenieGradz | Refund Policy</title>
        <link rel="canonical" href="https://geniegradz.com/Refund" />
      </Helmet>
            <div className="footer-container py-4 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium mt-8 title-font mb-2 text-cyan">Refund Policy</h1>
                    <div className="h-1 w-20 bg-cyan rounded"></div>
                </div>
            </div>
            <div className="leading-8 ">
                <p>Please read the subscription terms and conditions carefully before subscribing to any of the subscription
                    plans, as once you have subscribed you cannot change, cancel your subscription plan after 7 working days post
                    payment. Once you subscribe and make the required payment, it shall be final and there cannot be any changes
                    or modifications to the same, and neither will there be any REFUND after 7 working days post payment.</p>
                <p>In all the cases ₹999 will be deducted as the[basic portal charges+maintainence charges +bvc subscription
                    charges]and the rest of the amount will be considered as 100% and the final amount of refund will be disbursed
                    accordingly.
                </p>
            </div>
        </div>
    );
}

export default REfund;
