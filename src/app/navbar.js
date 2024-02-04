
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="mynav grid grid-cols-2 gap-4 justify-between items-center">
        <div className='grid grid-cols-5 items-center'>
            <Image
            className='pr-5'
            src="/white-bg-logo.png"
            alt="logo"
            quality={100}
            width={80}
            height={80}
            />
            <p>home</p>
            <p className=''>rooms</p>
            <p className=''>gallery</p>
            <p className=''>contact</p>
        </div>
        
        <div className='grid grid-cols-3 items-center'>
            <p className=''>rooms</p>
            <p className=''>gallery</p>
            <p className=''>contact</p>
        </div>
        
        
    </div>
  )
}
