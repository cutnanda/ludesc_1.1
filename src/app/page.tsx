'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/themebuilder/03-Breadcrumb';
import BorderNav from '@/components/themebuilder/2-NavSide/02-BorderNav';
import NormalMenu from '@/components/themebuilder/2-NavSide/04-NormalMenu';
import SidebarMapMenu from '@/components/elements/SidebarMapMenu';

import ScrollRevealSection from '@/components/elements/ScrollRevealSection';
import Achievement from '@/components/pages/Achivement/page';
import OurVisionPage from '@/components/pages/Vision/page';
import Product from '@/components/pages/Product/page';
import Home from '@/components/pages/Home/page';
import Team from '@/components/pages/Team/team';

import { sidebarMap } from '@/constant/sidebar';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionVisible = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 bottom-0 w-1/6 z-20 py-32">
        <nav>
          {sidebarMap.map((item, index) => (
            <React.Fragment key={index}>
              <SidebarMapMenu
                number={item.number}
                href={item.href}
                text={item.text}
                isActive={activeSection === item.href.slice(1)}
              />
              { activeSection === item.href.slice(1) && <BorderNav />}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* ScrollRevealSection components for each pages */}
      <div>
        <ScrollRevealSection id="home" onVisible={handleSectionVisible}>
          <Home />
        </ScrollRevealSection>
        <ScrollRevealSection id="vision" onVisible={handleSectionVisible}>
          <OurVisionPage />
        </ScrollRevealSection>
        <ScrollRevealSection id="product" onVisible={handleSectionVisible}>
          <Product />
        </ScrollRevealSection>
        <ScrollRevealSection id="achivement" onVisible={handleSectionVisible}>
          <Achievement />
        </ScrollRevealSection>
        <ScrollRevealSection id="team" onVisible={handleSectionVisible}>
          <Team />
        </ScrollRevealSection>
      </div>
    </div>
  );
}
