"use client"; // This is a client component

import Image from 'next/image'
import { useCallback, useState , useEffect } from 'react';

export default function Footer(){

    return(<div className="w-full footer-bg flex justify-between items-center text-black">
            <Image
                src="/white-bg-logo.png"
                alt="logo image"
                quality={100}
                width= {100}
                height= {100}
            />
            <p>contact us</p>
            
            <p>contact us</p>
       
    </div>)
}