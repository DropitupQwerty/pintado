import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppSellerLayout = () => {
    return (
        <div className='h-screen'>
            <div className='flex h-full'>

                <div className='h-full  shadow-lg '>
            Side Bar Here
                </div> 
                <div className='relative flex-1  max-h-screen overflow-auto flex flex-col items-end'>
                    <div className='w-[98%]'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
