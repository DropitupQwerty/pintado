import React from 'react'
import {AiOutlineUser , AiOutlineHeart , AiOutlineShoppingCart} from 'react-icons/ai'

export const AppNavigationBar = () => {

    const paths = [
        {
            label : 'Home',
            href:'#',
        },
        {
            label : 'Art Categories',
            href:'#',
        },
        {
            label : 'Handmade Paintings',
            href:'#',
        },
        {
            label : 'Art Prints',
            href:'#',
        },
        {
            label : 'All',
            href:'#',
        },
    ]








    return (
        <div className='text-white'>
            <div className='bg-primary-brown p-2 flex justify-between'>
                <div className='text-3xl'>
                    Pintado 5 Logo
                </div>

                <div>
                
                </div>
                <div className='flex items-center gap-2'>
                    <div className='font-bold'>Currency</div>
                    <div>
                        <select className='text-black'>
                            <option>PHP</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                </div>

                <div className='flex items-center text-3xl '>
                    <div className='flex justify-center text-center border-r-2 px-3'><AiOutlineUser /></div>
                    <div className='flex justify-center text-center border-r-2 px-3'><AiOutlineHeart /></div>
                    <div className='flex justify-center text-center  px-3'><AiOutlineShoppingCart/></div>
                </div>

            </div>
            <div className='bg-primary-red'>
                <ul className='flex gap-10 p-4'>
                    {
                        paths.map((path, index)=>
                            <li key={index}>
                                <a className=''>
                                    {path.label}  
                                </a>
                            </li>)
                    }

                </ul>

            </div>
        </div>
    )
}
