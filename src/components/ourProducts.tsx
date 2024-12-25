import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div id="ProductPage">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="font-semibold text-2xl py-4 text-center">
          Our Products
        </div>

        {/* Flex container for horizontal alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/image 123.jpeg"
              alt="chair1"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full text-[#007580] mt-2">
              Library Stool Chair <br />
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black">$20</span>
                <span className="h-[40px] w-[40px] rounded-[7px] flex items-center justify-center -mt-4 bg-[#007580]">
                  <Image src="/buy-3.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/image-123.jpeg"
              alt="chair2"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full mt-2">
              Library Stool Chair <br />
              <span className="font-semibold text-black">$20 <span className="text-sm text-gray-400 line-through">$30</span></span>
              <span className="h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]">
                <Image src="/buy-2.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/Image (1).png"
              alt="chair3"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full mt-2">
              Library Stool Chair <br />
              <span className="font-semibold text-black">$20</span>
              <span className="h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]">
                <Image src="/buy-2.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/naina.png"
              alt="chair"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full mt-2">
              Library Stool Chair <br />
              <span className="font-semibold text-black">$20</span>
              <span className="h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]">
                <Image src="/buy-2.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/frame-1.png"
              alt="chair"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full text-[#007580] mt-2">
              Library Stool Chair <br />
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black">$20</span>
                <span className="h-[40px] w-[40px] rounded-[7px] flex items-center justify-center -mt-4 bg-[#007580]">
                  <Image src="/buy-3.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/card-1.png"
              alt="chair"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full mt-2">
              Library Stool Chair <br />
              <span className="font-semibold text-black">$20 <span className="text-sm text-gray-400 line-through">$30</span></span>
              <span className="h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]">
                <Image src="/buy-2.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/image-2.png"
              alt="chair"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full mt-2">
              Library Stool Chair <br />
              <span className="font-semibold text-black">$20</span>
              <span className="h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]">
                <Image src="/buy-2.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div className="h-[377px] w-full">
            <Image
              className="h-[312px] w-full rounded-[6px]"
              src="/products-2.png"
              alt="chair"
              height={500}
              width={500}
            />
            <div className="h-[51px] w-full mt-2">
              Library Stool Chair <br />
              <span className="font-semibold text-black">$20</span>
              <span className="h-[40px] w-[40px] -mt-10 ml-auto rounded-[7px] flex items-center justify-center bg-[#F0F2F3]">
                <Image src="/buy-2.png" height={100} width={100} alt="cart icon" className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
