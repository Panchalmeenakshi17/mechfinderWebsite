import React from 'react';

const features = [
    {
        title: 'Instant Connectivity',
        description: 'Connect with nearby service providers instantly for any issue.',
        icon: 'https://i.pinimg.com/564x/7e/3c/80/7e3c801602467189db6b7b2dde8d0f32.jpg',
    },
    {
        title: 'User-Friendly Interface',
        description: 'Enjoy an easy-to-navigate interface designed for seamless user experience.',
        icon: 'https://i.pinimg.com/564x/ee/e0/72/eee07271575336da1dfe94d873b20cd5.jpg',
    },
    {
        title: 'Secure Payments',
        description: 'Make payments securely through trusted gateways.',
        icon: 'https://i.pinimg.com/564x/e4/89/bb/e489bb1e93950355689656b9f9531b4b.jpg',
    },
    {
        title: 'Wide Range of Services',
        description: 'Find professionals for plumbing, electrical work, painting, and more.',
        icon: 'https://i.pinimg.com/564x/34/5b/df/345bdf9d50098ca84f193a4dc0d7f0e9.jpg',
    },
    {
        title: 'Verified Locals',
        description: 'All service providers are verified to ensure quality and reliability.',
        icon: 'https://i.pinimg.com/564x/14/15/34/141534c31edfe922c168d5f8cbbd4bda.jpg',
    },
    {
        title: 'Customer Reviews',
        description: 'Read reviews and ratings from other customers before hiring a service provider.',
        icon: 'https://i.pinimg.com/enabled_lo/564x/21/dd/55/21dd5538257fd77e17b35b39d9d903ea.jpg',
    },
    {
        title: 'Real-Time Updates',
        description: 'Get real-time updates on your service requests and provider status.',
        icon: 'https://i.pinimg.com/564x/b0/59/71/b05971324f74fec07a15b5193de3ccff.jpg',
    },
    {
        title: 'Multi-Language Support',
        description: 'Access the app in multiple languages for a better user experience.',
        icon: 'https://i.pinimg.com/enabled_lo/736x/c4/a0/32/c4a03241ade3576a03b8426cfaebfc99.jpg',
    },
];

const FeaturesHighlight = () => {
    return (
        <>
        <section className="md:py-12 py-7 h-auto bg-gray-100">
            <div className="container font-Poppins mx-auto px-4">
                <h2 className="text-3xl font-bold text-indigo-600  text-center md:mb-8">Features Highlight</h2>
                <div className="grid p-4 md:p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mt-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <img className=' w-1/2 h-1/2' alt='no' src={feature.icon}/>
                            {/* <div className="text-5xl mb-4 text-center ">{feature.icon}</div> */}
                            <h3 className="text-xl font-semibold mb-2 text-center text-indigo-800">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        </>
    );
};

export default FeaturesHighlight;
