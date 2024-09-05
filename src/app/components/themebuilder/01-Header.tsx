import Image from 'next/image';
import React from 'react';

export default function Header() {
    return (
        <>
            <div className="bg-[#f7f7f7] w-full flex justify-center items-center mb-5">
                <div className="flex justify-center items-center p-5 w-[95%] lg:w-[85%]">
                    <div className="w-1/5">
                        <div className="w-[160px] ">
                            <Image src="LogoLudesc.svg" alt="Logo" width={130} height={60} />
                        </div>
                    </div>
                    <div className="w-3/5">
                        <ul className="hidden lg:flex justify-center gap-7 text-[15px]">
                            <li>Home</li>
                            <li className='text-[#bdbdbd]'>Product</li>
                            <li className='text-[#bdbdbd]'>Price</li>
                            <li className='text-[#bdbdbd]'>Achievement</li>
                            <li className='text-[#bdbdbd]'>About</li>
                        </ul>
                    </div>
                    <div className="w-1/5 flex">
                        <div className="w-1/2 flex justify-around">
                            <ul className="hidden lg:flex">
                                <li className="mx-2">EN</li>
                                <li className="mx-2">ID</li>
                            </ul>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <span className="material-symbols-outlined mx-2">
                                shopping_bag
                            </span>
                            <span className="material-symbols-outlined mx-2">
                                menu
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
