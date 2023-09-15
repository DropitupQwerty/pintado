import React from 'react'
import  logo  from 'assets/pintadoLogo.png'
import { Logout } from 'service/auth'

export const AppAdminSideBar = () => {
    

    const NavPaths = [
        {
            label: 'Dashboard',
            href:'dashboard'
        },
        {
            label: 'Users Management',
            href:'#'
        },
        {
            label: 'Sellers Management',
            href:'#'
        },
        {
            label: 'Account Settings',
            href:'#'
        },
        {
            label: 'Reports',
            href:'#'
        },
    ]




    return (
        <div className='relative min-w-[300px]  min-h-full flex flex-col '>
            <div className='flex justify-center'>
                <img src={logo} className='max-h-[100px]'/>
            </div>
        
            <div className='flex flex-col justify-between '>
                <div >
                    {NavPaths.map((path , index)=> 
                        <div key={index}>
                            <div>
                                <button className='text-lg text-start px-5 py-3 hover:bg-secondary-white w-full duration-300'>{path.label}</button>
                            </div>
                        </div>
                    
                    )}
                </div>
            </div>
            
            <div className='flex-1 h-full flex items-end' >
                <button onClick={Logout} className='text-lg text-primary-red text-start px-5 py-3 hover:bg-secondary-white w-full duration-300 '>{'LOGOUT'}</button>
            </div>
        </div>
    )
}
