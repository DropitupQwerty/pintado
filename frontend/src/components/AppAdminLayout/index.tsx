import { AppAdminSideBar } from 'components/AppAdminLayout/AppAdminSideBar'
import { AppAdminTopBar } from 'components/AppAdminLayout/AppAdminTopBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppAdminLayout = () => {
    return (
        <div className='h-screen'>
            <div className='flex h-full'>

                <div className='h-full  shadow-lg '>
                    <AppAdminSideBar/>
                </div> 
                <div className='relative flex-1 bg-secondary-white  max-h-screen overflow-auto flex flex-col items-end'>
                    <div className='w-[98%]'>
                        <AppAdminTopBar/>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
