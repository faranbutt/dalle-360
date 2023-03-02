import NavBrand from './assets/images/transparent.png'
import discord from './assets/images/discord.png'
import img360 from './assets/images/360.png'
import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'heroicons-react'

export default function NavBar() {
    return (
        // Making 2 navbars 
        <header>
            <nav className="hidden md:block bg-black text-white fixed h-screen p-3">
                <div className='flex flex-col h-full gap-36 overflow-auto'>
                    <div className='flex items-center justify-center gap-2'>
                        <div>
                            <img className='w-20 h-20' src={NavBrand} alt="" />
                        </div>
                        <div className='font-bold text-xl'>
                            Dall-E - 360
                        </div>
                    </div>
                    <div className='h-fulls flex items-center mb-20'>
                        <div className='flex flex-col gap-3'>
                            <a href='#' className='flex  items-center gap-2'>
                                <div className='h-1 w-1 bg-white rounded-full'></div>
                                Home
                            </a>
                            <a href='#' className='flex  items-center gap-2'>
                                <div className='h-1 w-1 bg-white rounded-full'></div>
                                Apply For Beta Access
                            </a>
                            <a href='#' className='flex  items-center gap-2'>
                                <div className='h-1 w-1 bg-white rounded-full'></div>
                                Gallery
                            </a>
                        </div>
                    </div>
                    <a href='#' className='flex items-center gap-1 px-3 p-3 text-gray-200 fixed bottom-0'>
                        <img className='w-10' src={discord} alt="" />
                        <div className='bg-gray-300 w-1 h-1 rounded-full'></div>
                        <div>
                            Discord
                        </div>
                    </a>
                </div>
            </nav>
            <nav className='text-white bg-black w-full p-3 md:hidden'>
                <div>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <div className='flex justify-between font'>
                                    <div className='flex items-center gap-2 font-bold text-lg'>
                                        <div>
                                            <img className='w-12 h-12' src={NavBrand} alt="" />
                                        </div>
                                        <div>
                                            Dall-E - 360
                                        </div>
                                    </div>
                                    <Disclosure.Button>
                                        <div className={
                                            `${open?'rotate-180':'rotate-0'}
                                            transition-all duration-500 rounded-full border-2 p-0.5 flex items-center justify-center border-t-red-400`
                                            }>
                                            <ChevronDown />
                                        </div>
                                    </Disclosure.Button>
                                </div>
                                <Disclosure.Panel className='mt-2 border-t border-white p-2'>
                                    <div>
                                        Home
                                    </div>
                                    <div>
                                        Early Access
                                    </div>
                                    <div>
                                        Gallery
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </nav>
            
        </header>
    )
}
{/* <iframe className='block m-[20px] mx-auto border-0 max-w-[880px] rounded-[8px] ' width="90%" height="500px" allowFullScreen={true} allow="accelerometer; magnetometer; gyroscope" src="https://panoraven.com/en/embed/PYKxs5WSfX"></iframe> */}
// style="display:block; margin:20px auto; border:0 none; max-width:880px;border-radius:8px; box-shadow: 0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11);"
// <div>
//     <div className='flex font-bold text-lg items-center gap-2'>
//         <div>
//             <img className='w-12 h-12' src={NavBrand} alt="" />
//         </div>
//         <div>
//             Dall-E - 360
//         </div>
//     </div>
// </div>