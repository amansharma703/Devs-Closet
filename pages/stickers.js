import React from "react";
import ProductCard from "../components/common/ProductCard";

const stickers = () => {
    const productData = {
        image: "https://m.media-amazon.com/images/I/61YnYuNntdL._SX679_.jpg",
    };
    return (
        <section className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='grid md:grid-cols-3 lg:grid-cols-5 3xl:grid-cols-6  gap-6 py-5'>
                    {new Array(12).fill(0).map((_, index) => (
                        <ProductCard key={index} index={index} product={productData} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default stickers;
