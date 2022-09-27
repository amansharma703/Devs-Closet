import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ key, index, product }) => {
    console.log(product);
    return (
        <Link key={index} href={"product/devs-closet"}>
            <div className='w-full cursor-pointer shadow-md border p-2 '>
                <div>
                    <Image alt='ecommerce' layout='responsive' height={100} width={80} className='object-contain' src={product.image} />
                </div>
                <div className='text-center md:text-start'>
                    <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>T-Shirts</h3>
                    <h2 className='text-gray-900 title-font text-lg font-medium'>Devs-Closet</h2>
                    <p className='mt-1'>₹499</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
