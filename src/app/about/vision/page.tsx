import Breadcrumb from '@/app/components/themebuilder/03-Breadcrumb';
import NavSide from '@/app/components/themebuilder/2-NavSide/01-NavSide';
import BorderNav from '@/app/components/themebuilder/2-NavSide/02-BorderNav';
import ActiveMenu from '@/app/components/themebuilder/2-NavSide/03-ActiveMenu';
import NormalMenu from '@/app/components/themebuilder/2-NavSide/04-NormalMenu';
import Image from 'next/image';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

export default function AboutVisionPage(): JSX.Element {
    return (
        <>
            {/* Content */}
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-start p-5 w-[95%] lg:w-[85%]">
                    <div className="lg:hidden mb-3">
                        <Breadcrumb
                            link={{ name: "Home", href: "/" }}
                            link2={{ name: "Introducing LUDESC" }}
                        />
                    </div>
                    {/* Content */}
                    <div
                        className="flex w-4/5 bg-cover bg-start rounded-tl-[26px] rounded-bl-[26px]"
                        style={{ backgroundImage: "url('../images/Dokter.jpg')" }}
                    >
                        <div className="flex w-full ">
                            <div className="w-2/5"></div>
                            <div className="w-3/5 py-10 pl-[150px] pr-10 bg-gradient-to-r from-[#ffffff04] via-[#ffffffe1] to-[#ffffff]">
                                <h1 className="text-[#1C738E] text-[30px] lg:text-[46px] font-bold mb-[-5px] ">OUR</h1>
                                <p className="text-[#1c8e72] text-[23px] lg:text-[38px] font-bold">MISSION</p>

                                <p className="mb-4 text-[#1C738E]">
                                    <li>
                                        To develop and provide state-of-the-art screening tools that offer high accuracy and reliability.
                                    </li>
                                    <li>
                                        To integrate AI technology seamlessly with medical devices to enhance screening capabilities.
                                    </li>
                                    <li>
                                        To facilitate remote consultations and telemedicine, ensuring healthcare access regardless of location.
                                    </li>
                                    <li>
                                        To empower healthcare providers with comprehensive data and AI-driven insights for informed decision-making.
                                    </li>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* NavSidebar */}
                    <NavSide>
                        <div className="w-full flex justify-start items-center text-[#1c738e]">
                            <p className="text-[14px] font-semibold mr-2">Home</p>
                            <HiChevronRight size={15} className="fill-current w-4 h-4" />
                        </div>
                        <ActiveMenu number="01" href="/introducing" text="Introducing LUDESC" />
                        <BorderNav />
                        <NormalMenu number="02" href="/vision" text="Our Vision" />
                        <NormalMenu number="03" href="/products" text="Products" />
                        <NormalMenu number="04" href="/team" text="Team" />
                    </NavSide>
                </div>
            </div>
        </>
    );
}
