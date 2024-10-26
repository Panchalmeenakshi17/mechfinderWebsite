import React from 'react';

const PremiumComponent = () => {


  const planDetails = (plan) => {
    let duration;
    let price;
  
    if (plan === 'Rs. 11') {
      duration = 3; // 3 days
      price = '₹11';
    } else if (plan === 'Rs. 49') {
      duration = 15; // 15 days
      price = '₹49';
    } else if (plan === 'Rs. 89' || plan === 'Rs. 129') {
      duration = 30; // 30 days
      price = '₹89';
    } else {
      console.log('No valid plan selected');
      return null;
    }
  
    return { duration, price };
  };
  
  // Sample usage with plan
  const selectedPlan = 'Rs. 11';
  const { duration, price } = planDetails(selectedPlan) || {};
  
  return (
    <div className="bg-gray-100 rounded-3xl min-h-screen mb-16 md:mb-20 px-6  md:px-12  ">
      {/* Top Section */}
      <div className="">
      <h1 className='font-Poppins font-bold text-3xl md:text-4xl py-9 text-center'>
  Elevate Your Experience with Premium Features
</h1>

      </div>
      <div className="bg-[#6772ee] rounded-3xl font-Poppins md:flex justify-around">
      <div className=" text-white p-8 md:w-2/3 rounded-lg shadow-lg">
      <h2 className="md:text-4xl md:text-left text-2xl font-bold mb-4">
  Unlock the Full Power of <span className="text-yellow-300">MechFinder Premium</span>
</h2>
<p className="mb-6  md:text-lg">
  Experience unmatched features tailored to help you streamline your business, manage payments seamlessly, and connect with a broader client base. 
  Upgrade today and enjoy an all-in-one platform designed for professionals like you — without any hidden costs.
</p>

{/* <h2 className="text-3xl font-semibold mt-8">
  Why Choose <span className="text-yellow-300">MechFinder Premium?</span>
</h2> */}
<p className="mt-4 text-lg">
  With Premium, you’ll have access to exclusive insights, enhanced visibility for your services, and priority support, helping you grow and scale your business effortlessly.
</p>

        <div className="flex  mt-5 space-x-4">
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
            <i className="fab fa-apple mr-2"></i> Download MechFinder Now
          </button>
          {/* <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
            <i className="fab fa-google-play mr-2"></i> Download Payday
          </button> */}
        </div>
      </div>
<div className=" p-2"> 
  <img src="https://i.pinimg.com/enabled_lo/564x/76/3d/41/763d417b82ad2ee1a32eede4e7e2242f.jpg" className=' rounded-3xl' alt="" />
</div>
      </div>
      <h3 className="text-2xl font-semibold text-center  font-Poppins mt-10">Check the most <span className='text-3xl text-blue-500'> Affordable </span> Prices of our <span className=' text-blue-500 text-3xl'> Premium</span></h3>

      {/* Bottom Section */}
      <div className="grid  md:px-10 font-Poppins md:grid-cols-2 gap-8 mt-12">
        {/* Send Cash to Family & Friends */}
        <div className=" bg-gradient-to-br   from-indigo-400 to-blue-300 p-8 rounded-3xl shadow-md">
  <h3 className="text-2xl  text-white font-semibold mb-4"> <span className=' text-gray-900'>Trial Plan</span></h3>
  <p className="mb-6 text-gray-50">
    With MechFinder's Trial Pack, explore our services and connect with verified service providers. Here’s what the Trial Plan includes:
  </p>
  <ul className="list-disc list-inside text-white mb-6">
  <li>Hassle-free payments directly on the platform.</li>
    <li>Access to verified providers for repairs and services.</li>
    <li>Quick responses, no hidden fees.</li>
    <li>Affordable at just <span className="text-yellow-200 font-semibold">₹11</span>.</li>
    <li>Full access for <span className="font-semibold">3 days</span> to post issues, & interact freely.</li>
    <li>One-time access – ideal for new users.</li>
  </ul>
  <div className="flex md:w-2/3 md:ml-24 md:translate-y-16 items-center justify-between bg-white p-4 rounded-lg shadow-lg">
    <div>
    <span className="text-lg font-semibold">₹11</span>
    <p className="text-sm text-gray-500 mt-1">Get 3 days of full access. Perfect for first-time users!</p>
    </div>
    <img
      className="h-12 w-12 rounded-full"
      src="https://randomuser.me/api/portraits/men/1.jpg"
      alt="User"
    />
  </div>
</div>



<div className="bg-gradient-to-bl from-indigo-400 to-blue-300 p-8 rounded-3xl shadow-md">
<h3 className="text-2xl  text-white font-semibold mb-4">  <span className=' text-gray-900'>Basic Plan</span></h3>
  <p className="mb-6 text-gray-100">
    Perfect for freelancers, remote workers, or corporate employees! Enjoy seamless connections and essential features with this plan.
  </p>
  <ul className="list-disc list-inside text-gray-100 mb-6">
    <li>Direct connections with service providers.</li>
    <li>Access to service providers' phone numbers.</li>
    <li>View provider locations and profile details.</li>
    <li>Full visibility of provider availability status.</li>
    <li><span className="font-semibold">15-day access</span> for all features, except query posting.</li>
  </ul>
  <div className="flex md:w-2/3 md:ml-24 md:translate-y-24 items-center justify-between bg-white p-4 rounded-lg shadow-lg">
    <div>
      <span className="text-lg font-semibold">₹49</span>
      <p className="text-sm text-gray-500">Enjoy 15 days of premium access, excluding query posting.</p>
    </div>
    <img
      className="h-12 w-12 rounded-full"
      src="https://randomuser.me/api/portraits/women/2.jpg"
      alt="User"
    />
  </div>
</div>


      </div>
      <div className="grid md:px-10 font-Poppins md:grid-cols-2 gap-8 mt-8 md:mt-16">
        {/* Send Cash to Family & Friends */}
        <div className=" bg-gradient-to-tr   from-indigo-400 to-blue-300  p-8 rounded-3xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Standard Plan</h3>
          <p className="mb-6 text-gray-100">
          This plan offers a wide range of features, including access to verified service providers, their contact information, and availability details. While it doesn't include the ability to post queries, you can connect seamlessly and communicate effectively for a full 30 days.
          </p>
          <ul className="list-disc list-inside text-gray-50 ">
      <li>Hassle-free and direct payments.</li>
      <li>Easy transfer to foreign accounts.</li>
      <li>No hidden fees on transactions.</li>
      <li>Access contact numbers of payees.</li>
      <li>View detailed transaction history.</li>
    </ul>
          <div className="flex md:w-2/3 md:ml-24 mt-2  md:translate-y-16  items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
            <span className="text-lg font-semibold">₹89</span>
            <p className="text-sm text-gray-500 mt-1">Full access for <span className="font-semibold">30 days</span> – including all features!</p>
            </div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
            />
          </div>
        </div>

        {/* Get Paid by Foreign Employers */}
        <div className=" bg-gradient-to-tl   from-indigo-400 to-blue-300  p-8 rounded-3xl  shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
          <p className="mb-6 text-gray-100">
          Experience the ultimate in service access and convenience with our Premium Plan, designed for those who demand the best.
          </p>
          <ul className="list-disc list-inside text-gray-100 mb-6">
    <li>Full access to all service providers.</li>
    <li>Ability to post queries and receive tailored responses.</li>
    <li>View service providers' phone numbers and locations.</li>
    <li>Priority customer support for quicker resolutions.</li>
    <li>Complete access for <span className="font-semibold">30 days</span>.</li>
  </ul>
          <div className="flex  md:w-2/3 md:ml-24 md:translate-y-24  items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
            <span className="text-lg font-semibold">₹129</span>
            <p className="text-sm text-gray-500">Unlock all the premium features including posting Queries for 30 days!</p>
            </div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumComponent;
