import React from 'react';

const PremiumComponent = () => {
  return (
    <div className="bg-gray-100 rounded-3xl min-h-screen  px-12  ">
      {/* Top Section */}
      <div className="">
      <h1 className='font-Poppins font-bold text-4xl py-9 text-center'>
  Elevate Your Experience with Premium Features
</h1>

      </div>
      <div className="bg-[#6772ee] rounded-3xl font-Poppins flex justify-around">
      <div className=" text-white p-8 w-2/3 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">
  Unlock the Full Power of <span className="text-yellow-300">MechFinder Premium</span>
</h2>
<p className="mb-6 text-lg">
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

      {/* Bottom Section */}
      <div className="grid px-10 font-Poppins md:grid-cols-2 gap-8 mt-12">
        {/* Send Cash to Family & Friends */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Send cash to family & friends</h3>
          <p className="mb-6 text-gray-600">
            Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees.
          </p>
          <div className="flex w-2/3 md:ml-24  translate-y-16  items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <span className="text-lg font-semibold">starting from just <span className=' text-blue-500'>₹11.</span></span>
              <p className="text-sm text-gray-500">You have successfully sent</p>
            </div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
            />
          </div>
        </div>

        {/* Get Paid by Foreign Employers */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Get paid by foreign employers</h3>
          <p className="mb-6 text-gray-600">
            Freelancer, remote worker, or corporate employee? Get paid fast and securely!
          </p>
          <div className="flex  w-2/3 md:ml-24 translate-y-16  items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <span className="text-lg font-semibold">£1350.00</span>
              <p className="text-sm text-gray-500">You have received money from Kiara</p>
            </div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User"
            />
          </div>
        </div>
      </div>
      <div className="grid px-10 font-Poppins md:grid-cols-2 gap-8 mt-12">
        {/* Send Cash to Family & Friends */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Send cash to family & friends</h3>
          <p className="mb-6 text-gray-600">
            Receive payments from your employers, clients, social media platforms, and other businesses directly to your own foreign account – without hidden fees.
          </p>
          <div className="flex w-2/3 md:ml-24  translate-y-16  items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <span className="text-lg font-semibold">starting from just <span className=' text-blue-500'>₹11.</span></span>
              <p className="text-sm text-gray-500">You have successfully sent</p>
            </div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
            />
          </div>
        </div>

        {/* Get Paid by Foreign Employers */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Get paid by foreign employers</h3>
          <p className="mb-6 text-gray-600">
            Freelancer, remote worker, or corporate employee? Get paid fast and securely!
          </p>
          <div className="flex  w-2/3 md:ml-24 translate-y-16  items-center justify-between bg-white p-4 rounded-lg shadow-lg">
            <div>
              <span className="text-lg font-semibold">£1350.00</span>
              <p className="text-sm text-gray-500">You have received money from Kiara</p>
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
