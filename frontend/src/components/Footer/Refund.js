import React from 'react';
import { Helmet } from 'react-helmet';

const REfund = () => {
    return (
        <div className="lg:px-20 lg:py-16 md:px-10 px-8 pb-8 bg-black">
                  <Helmet>
        <meta charSet="utf-8" />
        <title>Brainzeo | Refund Policy</title>
        <link rel="canonical" href="https://www.brainzeo.tech/Refund" />
      </Helmet>
            <div className="footer-container py-4 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-cyan">Refund Policy</h1>
                    <div className="h-1 w-20 bg-cyan rounded"></div>
                </div>
            </div>
            <div className="leading-8 text-gray-100">
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
