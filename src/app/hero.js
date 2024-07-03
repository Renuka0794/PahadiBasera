"use client"; // This is a client component

import Image from 'next/image'
import { useCallback, useState , useEffect } from 'react';

export default function Hero(){

    const links = ['www.instagram.com/pahadi_basera','www.airbnb.com/h/pahadibaserahomestay','www.airbnb.com/h/pahadibaserahostel','www.facebook.com/pahadibasera'];
    const headings = ['Where Tranquility Meets Tradition','Your Tranquil Homestay in the Heart of the Mountains','Relax in cozy rooms adorned with traditional decor, offering modern amenities for a comfortable stay. ']
    const [newLink,setNewLink] = useState('www.instagram.com/pahadi_basera');
    const [newHeading,setNewHeading] = useState(headings[0]);


    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * links.length);
        setNewLink(links[index]);
    }, []);

    const shuffle1 = useCallback(() => {
        const index = Math.floor(Math.random() * headings.length);
        setNewHeading(headings[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle1, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle1])


    return(<div className="w-full hero-bg">
            <Image
                src={"/hero.png"}
                alt="hero image"
                quality={100}
                layout="fill"
                style={{
                    objectFit: 'cover',
                }}
            />
        {/* <div className='overlay'/>  */}
        <div className='overlay-content text-center'>
             <h2 className='text-black text-xl pb-4 hero-heading'>Pahadi Basera Homestay</h2>
             {/* <h4 className='text-black'>{newHeading}</h4> */}
        </div>
    </div>)
}