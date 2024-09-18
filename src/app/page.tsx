import Breadcrumb from '@/components/themebuilder/03-Breadcrumb';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import ActiveMenu from '@/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import Image from 'next/image';
import React from 'react';


export default function HomePage() {
  return (
    <>
      {/* <!-- Content --> */}
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%]">
          <div className="lg:hidden mb-3">
            <Breadcrumb
              link={{ name: "Home", href: "/" }}
              link2={{ name: "Introducing LUDESC" }}
            />
          </div>
          <div className="md:w-[90%] w-full flex flex-col md:flex-row justify-center items-start  ">
            {/* <!-- Item 2 (Image) --> */}
            <div className="w-full md:w-[55%] md:order-last flex justify-center items-center ml-5">
              <div className="w-[200px] sm:w-[400px]">
                <Image
                  src="/images/HeroImage.png"
                  alt="Hero Image"
                  width={700}
                  height={700}
                />
              </div>
            </div>

            {/* <!-- Item 1 (Text) --> */}
            <div className="w-full md:w-[45%] lg:mt-0 mt-8  ">
              <div>
                <h1 className="text-[#1C738E] text-[30px] lg:text-[46px] font-bold mb-[-5px] ">AI-Powered</h1>
                <p className="text-[#1c8e72] text-[23px] lg:text-[38px] font-bold">Lung Disease Screening & Telemedicine</p>
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
          
          <div className="hidden md:flex w-full md:w-[20%] flex-col justify-start items-start space-y-4 mt-8 md:mt-0 ml-0 md:ml-10">
            <ActiveMenu number="01" href="/" text="Introducing LUDESC" />
            <BorderNav />
            <NormalMenu number="02" href="/vision" text="Our Vision" />
            <NormalMenu number="03" href="/products" text="Products" />
            <NormalMenu number="04" href="/achievement" text="Achievement" />
            <NormalMenu number="05" href="/team" text="Team" />
            
        </div>
        </div>
      </div>
      {/* Page 2 */}
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-10">
          <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-center items-start  ">
            {/* <!-- Item 2 (Image) --> */}
            <div className="w-full md:w-[45%]  flex justify-start items-center ">
              <div className="flex flex-wrap justify-between mt-4">
                <div className="w-full md:w-1/3 text-center">
                  <h3 className="font-[600] text-4xl">30+</h3>
                  <p className='text-[#828383] text-[14px] font-300'>Clients & Medical Facilities</p>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <h3 className="font-[600] text-4xl">12+</h3>
                  <p className='text-[#828383] text-[14px] font-300'>Awards <br /> Winnings</p>
                </div>
                <div className="w-full md:w-1/3 text-center">
                  <h3 className="font-[600] text-4xl">15+</h3>
                  <p className='text-[#828383] text-[14px] font-300'>Years Experience</p>
                </div>
              </div>
            </div>
            {/* <!-- Item 1 (Text) --> */}
            <div className="w-full md:w-[55%] lg:mt-0 mt-8 shadow-lg p-5 ml-5 bg-white">
              <div>
                <div className="container mx-auto">
                  {/* Menggunakan flex display untuk membuat div sebaris */}
                  <div className="flex items-center justify-between">
                    {/* Div 1 */}
                    <div className='text-[#828383] text-[13px] font-300'>
                      <span>Stethoscope </span>
                      <br />
                      <span>& Medical Service</span>
                      <br />
                      <strong className='text-[#404141] text-[15px]'>IDR 15.000.000</strong>
                    </div>

                    {/* Div 2 */}
                    <div className="flex items-center space-x-2">
                      <button className="bg-[#e9e9e9] text-[#3d3d3d] px-3 py-1 ">
                        -
                      </button>
                      <input
                        type="number"
                        defaultValue="1"
                        min="1"
                        className="text-center w-16 border border-gray-300 px-2 py-1 "
                      />
                      <button className="bg-[#e9e9e9] text-[#3d3d3d] px-3 py-1 ">
                        +
                      </button>
                      <button className="bg-[#1b4b4f] text-white px-4 py-2  ml-2 text-[14px]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- NavSidebar --> */}
          <div className="hidden md:flex w-full md:w-1/5 flex-col justify-start items-start space-y-4 mt-8 md:mt-0 ml-0 md:ml-10">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
