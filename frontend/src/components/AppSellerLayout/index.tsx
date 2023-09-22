import { AppSellerSideBar } from 'components/AppSellerLayout/AppSellerSideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import  logo from 'assets/pintado5whitetext.png'
import { Button } from '@material-tailwind/react'
import { Logout } from 'service/auth'

export const AppSellerLayout = () => {
    return (
        <div className='h-screen flex flex-col'>
            <div className='w-full p-5 bg-primary-brown flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={logo} className='max-h-[50px]'/>
                    <div className='font-bold text-xl text-primary-white'>Pintado Seller Account</div> 
                </div>
                <div><Button onClick={Logout}>Logout</Button></div>
            </div>
            <div className='flex h-full'>

                <div className='h-full  shadow-lg '>
                    <AppSellerSideBar/>
                </div> 
                <div className='relative flex-1  max-h-screen overflow-auto flex flex-col items-end'>
                    <div className=' flex h-full w-full bg-secondary-white p-5'>
                        <div className='bg-primary-white w-full rounded-md p-4'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
