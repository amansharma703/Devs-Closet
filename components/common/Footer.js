import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerNavigation = {
    products: [
        { name: 'Tshirt', href: '#' },
        { name: 'Hoodies', href: '#' },
        { name: 'Mugs', href: '#' },
        { name: 'Sticker', href: '#' },
    ],
    support: [
        { name: 'Who we are', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
}

const Footer = () => {
    return (
        <footer className='text-gray-600 body-font'>
            <div className='container px-5 pt-24 mx-auto w-full flex flex-col md:flex-row flex-wrap  items-start md:text-left text-center order-first'>
                <div className='w-2/5 flex items-start flex-col '>
                    <Image src='/logo.png' layout='fixed' width={200} height={80} alt='hero' />
                    <p class='mt-2 ml-1 text-sm text-gray-500 hover:text-gray-600'>Focus on code we will handle your clothing</p>
                </div>
                <div className='w-3/5 flex flex-col md:flex-row items-start justify-start'>
                    <div className='lg:w-1/4 md:w-1/2 w-full md:px-4'>
                        <h2 className='title-font text-start font-medium text-brandGray2 tracking-widest text-sm mb-3 uppercase'>Menu</h2>
                        <nav className='list-none flex flex-col items-start mb-10'>
                            {footerNavigation.products.map((item) => (
                                <Link href='/' >
                                    <a className='text-gray-500 hover:text-gray-600 text-sm'>{item.name}</a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className='lg:w-1/4 md:w-1/2 w-full md:px-4'>
                        <h2 className=' text-start font-medium text-brandGray2 tracking-base text-sm mb-3 uppercase'>SUPpORT</h2>
                        <nav className='list-none flex flex-col items-start mb-10'>
                            {footerNavigation.support.map((item) => (
                                <Link href='/' >
                                    <a className='text-gray-500 hover:text-gray-600 text-sm'>{item.name}</a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className='lg:w-1/4 md:w-1/2 w-full md:px-4'>
                        <h2 className='title-font text-start font-medium text-brandGray2 tracking-bases text-sm mb-3 uppercase'>CATEGORIES</h2>
                        <nav className='list-none flex flex-col items-start mb-10'>
                            {footerNavigation.customerService.map((item) => (
                                <Link href='/' >
                                    <a className='text-gray-500 hover:text-gray-600 text-sm'>{item.name}</a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className='lg:w-1/4 md:w-1/2 w-full md:px-4'>
                        <h2 className='title-font text-start font-medium text-brandGray2 tracking-base text-sm mb-3'>DOWNLOAD THE APP</h2>
                        {/* <AppStore /> */}
                    </div>
                </div>
            </div>
            <div className='bg-gray-100'>
                <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
                    <p className='text-gray-500 text-sm text-center sm:text-left'>
                        © 2020 DevsCloset —
                        <a href='/' rel='noopener noreferrer' className='text-gray-600 ml-1' target='_blank'>
                            @devscloset
                        </a>
                    </p>
                    <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
                        <a className='text-gray-500  cursor-pointer'>
                            <svg
                                fill='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                            </svg>
                        </a>
                        <a className='ml-3 text-gray-500 cursor-pointer'>
                            <svg
                                fill='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                            </svg>
                        </a>
                        <a className='ml-3 text-gray-500 cursor-pointer'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                            </svg>
                        </a>
                        <a className='ml-3 text-gray-500 cursor-pointer'>
                            <svg
                                fill='currentColor'
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='0'
                                className='w-5 h-5'
                                viewBox='0 0 24 24'
                            >
                                <path stroke='none' d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
                                <circle cx='4' cy='4' r='2' stroke='none'></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
