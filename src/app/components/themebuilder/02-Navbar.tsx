"use client";

import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { HiHome, HiOutlineUser, HiOutlinePlus, HiMenuAlt3, HiX, HiFolderOpen, HiOutlineShoppingCart } from 'react-icons/hi';
import Button from '../elements/Button';
import MenuDesktopAktif from './1-MenuDekstop/01-MenuAktif';
import MenuDesktopNonAktif from './1-MenuDekstop/02-MenuNonAktif';

export default function NavbarMobile() {
    const [isClick, setIsClick] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (title: string) => {
        setOpenMenu(openMenu === title ? null : title);
    };

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <div className='sticky top-0 inset-x-0 z-20 lg:mb-7 border-b border-[#0000000c] bg-white'>
            <div className='w-[100%] lg:w-[85%] mx-auto px-4 sm:px-6 flex items-center justify-between h-20'>
                <Link href="/dashboard">
                    <Image src="/images/LogoLudesc.svg" alt="Logo" width={130} height={60} />
                </Link>
                <div className="w-3/5">
                    <ul className="hidden md:flex items-center justify-center space-x-5">
                        <MenuDesktopAktif
                            title="Home"
                            items={['Introduction Ludesc', 'Our Vision', 'Products', 'Achievement', 'Team']}
                            isOpen={openMenu === 'Home'}
                            toggleDropdown={() => toggleMenu('Home')}
                            href="/home"
                            className="text-[#3a3f3e]"
                            dropdownLinks={[
                                '/home/',
                                '/home/vision',
                                '/home/products',
                                '/home/achievement',
                                '/home/team',
                            ]}
                        />
                        <MenuDesktopNonAktif
                            title="Product"
                            items={[' Service Offer', ' Playground', 'Products', 'Achievement', 'Team']}
                            isOpen={openMenu === 'Products'} // Set isOpen sesuai dengan state
                            toggleDropdown={() => toggleMenu('Products')}
                            href="/about"
                            className="text-[#999999]"
                            dropdownLinks={[
                                '/about/',
                                '/about/vision',
                                '/about/products',
                                '/home/achievement',
                                '/home/team',
                            ]}
                        />
                        <MenuDesktopNonAktif
                            title="Price"
                            items={[]}
                            isOpen={openMenu === 'Price'} // Set isOpen sesuai dengan state
                            toggleDropdown={() => toggleMenu('Price')}
                            href="/price"
                            className="text-[#999999]"
                            dropdownLinks={[]}
                        />
                        <MenuDesktopNonAktif
                            title="Achievement"
                            items={[]}
                            isOpen={openMenu === 'Achievement'} // Set isOpen sesuai dengan state
                            toggleDropdown={() => toggleMenu('Achievement')}
                            href="/achievement"
                            className="text-[#999999]"
                            dropdownLinks={[]}
                        />
                        <MenuDesktopNonAktif
                            title="About Ludesc"
                            items={['About Ludesc', '  Our Mission', 'Our Vision', 'Achievement', 'Team']}
                            isOpen={openMenu === 'About Ludesc'} // Set isOpen sesuai dengan state
                            toggleDropdown={() => toggleMenu('About Ludesc')}
                            href="/about"
                            className="text-[#999999]"
                            dropdownLinks={[
                                '/about/',
                                '/about/our-mission',
                                '/about/vision',
                                '/home/achievement',
                                '/home/team',
                            ]}
                        />
                        
                    </ul>
                </div>
                <div className="w-1/5 flex">
                    <div className="w-1/2 flex justify-around">
                        <ul className="hidden lg:flex">
                            <li className="mx-2">EN</li>
                            <li className="mx-2">ID</li>
                        </ul>
                    </div>
                    <div className="hidden w-1/2 md:flex justify-end">
                        <HiOutlineShoppingCart size={24} className='' />
                    </div>
                </div>
                <button
                    className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3f5069]"
                    onClick={toggleNavbar}
                >
                    {isClick ? (
                        <HiX size={24} />
                    ) : (
                        <HiMenuAlt3 size={24} />
                    )}
                </button>
            </div>

            {isClick && (
                <div className="p-3 bg-[#f0f0f0] border-y border-[#dbdbdb]">
                    <Button
                        icon={<HiHome size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Dashboard"
                        href="/dashboard"
                        className="font-medium hover:bg-[#8ca7cc] hover:text-white"
                    />
                    <Button
                        icon={<HiFolderOpen size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Table Siswa"
                        href="/tablesiswa"
                        className="mt-2 font-medium hover:bg-[#8ca7cc] hover:text-white"
                    />
                    <Button
                        icon={<HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Profil Saya"
                        href="/profil"
                        className="mt-2 font-medium hover:bg-[#8ca7cc] hover:text-white"
                    />
                </div>
            )}
        </div>
    );
}
