import Breadcrumb from '@/components/themebuilder/03-Breadcrumb';
import NavSide from '@/components/themebuilder/2-NavSide/01-NavSide';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import ActiveMenu from '@/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import Image from 'next/image';
import React from 'react';

export default function ProductsPage() {
    return (
        <>
            <div className="flex-1 bg-no-repeat bg-left flex items-center justify-center"
                style={{ backgroundImage: "url('/images/ludescapp.png')", backgroundSize: '30%' }}>
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-10">
                    <div className="w-4/5 flex flex-col space-y-10">
                        {/* Item 1 */}
                        <div className="flex items-start">
                            <div className="w-2/6 bg-slate-600 h-full"></div>
                            <div className="w-4/6 flex justify-between items-start">
                                <div className="w-1/2 text-right">
                                    <h5 className="text-[#22a878] text-3xl font-bold">Safe & Easy Lung Screening with LUDESC</h5>
                                    <h6 className="text-[#1c738e] text-lg font-semibold mt-3">Improve Lung diagnostic accuracy and efficiency</h6>
                                    <p className="text-[#2a7b95] text-[15px]">Make medical personnel feel safer in carrying out their work.</p>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    <Image src="/images/apps.png" alt="Team" width={200} height={200} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2/6 bg-slate-600 h-full"></div>
                            <div className="w-4/6 flex justify-between items-start">
                                <div className="w-1/2 flex justify-center">
                                    <Image src="/images/apps2.png" alt="Team" width={200} height={200} />
                                </div>
                                <div className="w-4/6 text-left">
                                    <h5 className="text-[#22a878] text-3xl font-bold">Comprehensive Lung Health Insight</h5>
                                    <h6 className="text-[#1c738e] text-lg font-semibold mt-3">Lung Map</h6>
                                    <p className="text-[#2a7b95] text-justify text-[15px]">Visualize your lung health effortlessly. Our lung map displays the presence of wheezing and ronchi, offering a clear understanding of your respiratory condition.</p>
                                    <h6 className="text-[#1c738e] text-lg font-semibold mt-3">Differential Diagnosis</h6>
                                    <p className="text-[#2a7b95] text-justify text-[15px]">Leverage advanced algorithms to get a detailed differential diagnosis. Our system analyzes your lung sounds for possible outcomes with AI-driven accuracy.</p>
                                    <div className='flex items-center space-x-4 mt-5'>
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
                    </div>
                    <NavSide>
                        <NormalMenu number="01" href="/" text="Introducing LUDESC" />
                        <NormalMenu number="02" href="/vision" text="Our Vision" />
                        <ActiveMenu number="03" href="/products" text="Products" />
                        <BorderNav />
                        <NormalMenu number="04" href="/achievement" text="Achievement" />
                        <NormalMenu number="05" href="/team" text="Team" />
                    </NavSide>
                </div>
            </div>
            {/* <!-- Content --> */}
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[90%] mb-[100px]">
                    <div className="lg:hidden mb-3">
                        <Breadcrumb
                            link={{ name: "Home", href: "/" }}
                            link2={{ name: "Introducing LUDESC" }}
                        />
                    </div>
                    <div className="md:w-4/5 w-full flex flex-col md:flex-row justify-center items-start  ">
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
                    <NavSide>
                        <div></div>
                    </NavSide>
                </div>
            </div>
        </>
    );
}
