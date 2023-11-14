"use client"; // This is a client component

import Image from 'next/image'
import { useCallback, useState , useEffect } from 'react';

export default function Hero(){

    const links = ['www.instagram.com/pahadi_basera','www.airbnb.com/h/pahadibaserahomestay','www.airbnb.com/h/pahadibaserahostel','www.facebook.com/pahadibasera'];

    const [newLink,setNewLink] = useState('www.instagram.com/pahadi_basera');

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * links.length);
        setNewLink(links[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    return(<div className="w-full hero-bg">
            <Image
                src="/hero.png"
                alt="hero image"
                quality={100}
                layout="fill"
                style={{
                    objectFit: 'cover',
                }}
            />
        <div className='overlay'/> 
        <div className='overlay-content text-center'>
            <a href={`https://${newLink}`} target='_blank' className='text-black'>{newLink}</a>
        </div>
    </div>)
}