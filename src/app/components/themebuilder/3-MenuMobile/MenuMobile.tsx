// src/app/components/themebuilder/3-MenuMobile/MenuMobile.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { HiHome, HiMenuAlt3, HiX, HiOutlineShoppingCart, HiUsers, HiTag, HiSparkles } from 'react-icons/hi';
import Button from "../../elements/Button";

export default function MenuMobile() {
    const [isClick, setIsClick] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>({
        home: false,
        products: false,
        about: false
    });
    const router = useRouter();

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    const toggleSubMenu = (menu: string): void => {
        setOpenSubMenu(prev => {
            const newOpenSubMenu = {
                home: false,
                products: false,
                about: false,
                [menu]: !prev[menu],
            };
            return newOpenSubMenu;
        });
    };

    useEffect(() => {
        const handleRouteChange = () => {
            if (isClick) {
                setIsClick(false);
            }
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [isClick, router.events]);

    return (
        <div className="lg:hidden p-3 bg-[#f0f0f0] border-t border-[#dbdbdb] absolute w-full shadow-lg shadow-[#00000017]">
            {/* Home Menu */}
            <Button
                icon={<HiHome size={15} className='fill-current w-4 h-4 mr-3' />}
                text="Home"
                href=""
                className="font-medium hover:bg-[#6a97d4] hover:text-white"
                hasSubMenu={true}
                toggleSubMenu={() => toggleSubMenu('home')}
                isSubMenuOpen={openSubMenu.home}
            />
            {openSubMenu.home && (
                <div className="pl-8 ">
                    <Button text="Introduction Ludesc" href="/" />
                    <Button text="Our Vision" href="/home/vision" />
                    <Button text="Products" href="/home/products" />
                    <Button text="Achievement" href="/home/achievement" />
                    <Button text="Team" href="/home/team" />
                </div>
            )}

            {/* Products Menu */}
            <Button
                icon={<HiOutlineShoppingCart size={15} className='fill-current w-4 h-4 mr-3' />}
                text="Products"
                href=""
                className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white"
                hasSubMenu={true}
                toggleSubMenu={() => toggleSubMenu('products')}
                isSubMenuOpen={openSubMenu.products}
            />
            {openSubMenu.products && (
                <div className="pl-8">
                    <Button text="Service Offer" href="/products/service-offer" />
                    <Button text="Playground" href="/products/playground" />
                    <Button text="Product" href="/products/product" />
                    <Button text="Achievement" href="/products/achievement" />
                    <Button text="Team" href="/products/team" />
                </div>
            )}

            {/* Price Menu */}
            <Button
                icon={<HiTag size={15} className='fill-current w-4 h-4 mr-3' />}
                text="Price"
                href="/price"
                className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white"
            />

            {/* Achievement Menu */}
            <Button
                icon={<HiSparkles size={15} className='fill-current w-4 h-4 mr-3' />}
                text="Achievement"
                href="/achievement"
                className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white"
            />

            {/* About Menu */}
            <Button
                icon={<HiUsers size={15} className='fill-current w-4 h-4 mr-3' />}
                text="About"
                href=""
                className="mt-2 font-medium hover:bg-[#6a97d4] hover:text-white"
                hasSubMenu={true}
                toggleSubMenu={() => toggleSubMenu('about')}
                isSubMenuOpen={openSubMenu.about}
            />
            {openSubMenu.about && (
                <div className="pl-8">
                    <Button text="Our Mission" href="/about/mission" />
                    <Button text="Our Vision" href="/about/vision" />
                    <Button text="Achievement" href="/about/achievement" />
                    <Button text="Team" href="/about/team" />
                </div>
            )}
        </div>
    );
}
