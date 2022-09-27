import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <header class='text-gray-600 body-font shadow'>
            <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start md:items-center'>
                <Link href='/'>
                    <a class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                        <Image src='/logo.png' layout='fixed' width={200} height={60} alt='hero' />
                    </a>
                </Link>
                <nav class='mx-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base md:text-xl justify-center'>
                    <Link href='/tshirts'>
                        <a class='mr-5 hover:text-gray-900'>Tshirts</a>
                    </Link>
                    <Link href='/hoodies'>
                        <a class='mr-5 hover:text-gray-900'>Hoodies </a>
                    </Link>
                    <Link href='/mugs'>
                        <a class='mr-5 hover:text-gray-900'>Mugs</a>
                    </Link>
                    <Link href='/stickers'>
                        <a class='mr-5 hover:text-gray-900'>Stickers</a>
                    </Link>
                </nav>
                <button class='absolute md:static top-2 right-2 md:inline-flex items-center py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-5  font-medium md:text-xl'>
                    <span className='hidden md:block'>Cart</span>
                    <AiOutlineShoppingCart className='pl-2 text-4xl' />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
