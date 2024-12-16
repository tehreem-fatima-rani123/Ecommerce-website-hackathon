'use client';  // Add this line to mark this file as a client-side component
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import React, { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { Button } from "@/components/ui/button"; 
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

function Navbar() {
  const [cartCount,] = useState(2); 

  return (
    <div>
  
      <div className="w-full bg-[#272343]">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-[14px]">
 
          <div className="opacity-70 text-white text-sm flex gap-3 items-center mb-2 sm:mb-0">
            <span>
              <FaCheck />
            </span>
            Free shipping on all orders over $50
          </div>

  
          <div className="flex flex-row items-center gap-6 opacity-70 text-white text-sm">

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  Eng
                  <Image src="/Vector.png" alt="angle" width={7} height={4} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div>Faqs</div>

            <div className="flex flex-row items-center gap-1">
              <span>
                <CiCircleAlert />
              </span>
              Need Help
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-[#F0F2F3]">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-[20px]">
{/* logo */}
          <div className="flex flex-row items-center gap-2 mb-4 sm:mb-0">
            <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
            <div className="text-2xl font-semibold text-[#272343]">Comforty</div>
          </div>
         
        
          <div className="relative flex flex-row justify-between mr-28  w-7 h-7 items-center px-4 py-[11px] gap-2 bg-white rounded-[0.50rem] shadow-md">
          
            <Link href="/cart">
                 <div className=" bg-white w-[120px] h-[44px] -ml-5 relative rounded-lg flex items-center justify-center gap-3">
                    <div><LuShoppingCart size={20}/></div>
                    <p className="text-[#272343] font-sans font-semibold">Cart</p>
                    <div className="bg-[#007580] w-[20px] h-[20px] rounded-full text-white text-xs flex justify-center items-center">2</div>
                 </div>
                 </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
