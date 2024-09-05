import Image from 'next/image';
import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* <!-- Content --> */}
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[85%]">
          <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-center items-start  ">
            {/* <!-- Item 2 (Image) --> */}
            <div className="w-full md:w-[50%] md:order-last">
              <div>
                <Image src="/HeroImage.jpg" alt="Hero Image" width={400} height={300} />
              </div>
            </div>
            {/* <!-- Item 1 (Text) --> */}
            <div className="w-full md:w-[50%] ">
              <div>
                <h1 className="text-[#1C738E] text-[46px] font-bold mb-[-5px]">AI-Powered</h1>
                <p className="text-[#1c8e72] text-[38px] font-bold">Lung Disease Screening & Telemedicine</p>
                <p className="text-[#828383] text-[15px] font-300 mb-5 mt-2 leading-[1.6rem]">
                  System to help patients and medical personnel in early screening for lung
                  disease with AI technology in the form of self-screening and telemedicine quickly, easy
                  and cheap.
                </p>
                <div className='flex items-center space-x-4'>
                  <button className="bg-[#1C738E] py-2.5 px-7 text-[16px] text-white font-semibold">Join
                    Now</button>
                  <button
                    className="text-[#1C738E] hover:text-[#ffffff] hover:bg-[#1C738E] py-2.5 px-3 text-[16px] font-medium flex justify-center">
                    <span className="material-symbols-outlined mr-3 text-[44px] ">
                      play_circle
                    </span>Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- NavSidebar --> */}
          <div className="w-full md:w-1/5 flex flex-col justify-start items-start space-y-4 mt-8 md:mt-0 ml-0 md:ml-10  ">
            <div className="flex items-center gap-4">
              <p className='text-[13px] font-medium text-[#999999]'>01</p>
              <a href="" className="text-[16px] font-semibold">Introducing LUDESC</a>
            </div>
            <div className="flex items-center border-l-2 border-gray-300 pl-4 py-10 my-2">
            </div>
            <div className="flex items-center gap-4">
              <p className='text-[13px] font-medium text-[#999999]'>02</p>
              <a href="" className="text-[15px] font-semibold">Our Vision</a>
            </div>
            <div className="flex items-center gap-4">
              <p className='text-[13px] font-medium text-[#999999]'>03</p>
              <a href="" className="text-[15px] font-semibold">Products</a>
            </div>
            <div className="flex items-center gap-4">
              <p className='text-[13px] font-medium text-[#999999]'>04</p>
              <a href="" className="text-[15px] font-semibold">Products</a>
            </div>
            <div className="flex items-center gap-4">
              <p className='text-[13px] font-medium text-[#999999]'>05</p>
              <a href="" className="text-[15px] font-semibold">Team</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
