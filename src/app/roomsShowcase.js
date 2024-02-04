"use client"; // This is a client component
import Image from 'next/image'
// import { useCallback, useState , useEffect } from 'react';

export default function RoomsShowcase(){

    return(<div className="w-full flex flex-row bg-white px-5 py-20">
            <div className='room-showcase basis-1/3 mx-5 text-center'>
                <p className='py-5 text-black font-semibold '>PRIVATE ROOM</p>
                <div className='w-full relative block'>
                    <Image
                        src="/bedroom1.jpg"
                        alt="bedroom image"
                        quality={100}
                        layout="fill"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <p className='py-5 text-black font-semibold'>INR 1499/DAY </p>
                <p className='pb-5 text-black text-justify'>Our private room with an attached washroom offers a charming retreat in a traditional homestay. Crafted from locally sourced stone, wood, and mud, the room exudes rustic elegance. </p>     
            </div>
            <div className='room-showcase basis-1/3 mx-5 text-center'>
                <p className='py-5 text-black font-semibold '>HOSTEL ROOM</p>
                <div className='w-full relative block'>
                    <Image
                        src="/hostelroom.jpg"
                        alt="hostelroom image"
                        layout="fill"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <p className='py-5 text-black font-semibold '>INR 550/DAY</p>
                <p className='pb-5 text-black text-justify'>Our cozy hostel room in a traditional Himachali homestay, where simplicity meets authenticity. Constructed from a blend of stone, wood, and mud, our rooms capture the essence of Himalayan living.</p>
            </div>
            <div className='room-showcase basis-1/3 mx-5 text-center'>
                <p className='py-5 text-black font-semibold '>ECONOMY PRIVATE ROOM</p>
                <div className='w-full relative block'>
                    <Image
                        src="/economyroom.jpg"
                        alt="hostelroom1 image"
                        layout="fill"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <p className='py-5 text-black font-semibold '>INR 1199/DAY</p>
                <p className='pb-5 text-black text-justify'> Our budget-friendly economy private room within a traditional homestay. Experience the charm of traditional architecture against the backdrop of majestic mountains. .</p>

            </div>
    </div>)
}