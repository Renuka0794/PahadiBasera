
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faGoogle } from '@fortawesome/free-brands-svg-icons'


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
            <p className=''>home</p>
            <p className=''>rooms</p>
            <p className=''>gallery</p>
            <p className=''>contact</p>
        </div>
        
        <div className='grid grid-cols-3 items-center'>
         <FontAwesomeIcon icon={faFacebook} className='w-8 px-2'/>
         <FontAwesomeIcon icon={faInstagram} className='w-8 px-2'/>
         <FontAwesomeIcon icon={faGoogle} className='w-8 px-2'/>


        </div>
        
        
    </div>
  )
}
