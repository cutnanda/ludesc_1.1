import React, { useState } from "react";
import ItemMenu from './01-ItemMenu'

export default function MenuDekstop() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (title: string) => {
        setOpenMenu(openMenu === title ? null : title);
    };

    return (
        <ul className="hidden md:flex items-center justify-center space-x-5">
            <ItemMenu
                title="Home"
                items={['Introduction Ludesc', 'Our Vision', 'Products', 'Achievement', 'Team']}
                isOpen={openMenu === 'Home'}
                toggleDropdown={() => toggleMenu('Home')}
                href="/home"
                dropdownLinks={[
                    '/home/',
                    '/home/vision',
                    '/home/products',
                    '/home/achievement',
                    '/home/team',
                ]}
            />
            <ItemMenu
                title="Product"
                items={[' Service Offer', ' Playground', 'Products', 'Achievement', 'Team']}
                isOpen={openMenu === 'Products'}
                toggleDropdown={() => toggleMenu('Products')}
                href="/about"
                dropdownLinks={[
                    '/about/',
                    '/about/vision',
                    '/about/products',
                    '/home/achievement',
                    '/home/team',
                ]}
            />
            <ItemMenu
                title="Price"
                items={[]}
                isOpen={openMenu === 'Price'}
                toggleDropdown={() => toggleMenu('Price')}
                href="/price"
                dropdownLinks={[]}
            />
            <ItemMenu
                title="Achievement"
                items={[]}
                isOpen={openMenu === 'Achievement'}
                toggleDropdown={() => toggleMenu('Achievement')}
                href="/achievement"
                dropdownLinks={[]}
            />
            <ItemMenu
                title="About Ludesc"
                items={['About Ludesc', 'Our Mission', 'Our Vision', 'Achievement', 'Team']}
                isOpen={openMenu === 'About Ludesc'}
                toggleDropdown={() => toggleMenu('About Ludesc')}
                href="/about"
                dropdownLinks={[
                    '/about/',
                    '/about/our-mission',
                    '/about/vision',
                    '/home/achievement',
                    '/home/team',
                ]}
            />
        </ul>
    )
}
