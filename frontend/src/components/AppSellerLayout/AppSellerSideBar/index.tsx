import React from 'react'
// import  logo  from 'assets/pintadoLogo.png'
// import { Logout } from 'service/auth'
import { useNavigate } from 'react-router-dom'

export const AppSellerSideBar = () => {
    const navigate = useNavigate()

    const NavPaths = [
        {
            label: 'Dashboard',
            href:'/seller'
        },
      
        {
            label: 'Manage Artworks',
            href:'/seller/manage-artworks'
        },
        {
            label: 'Manage Orders',
            href:'/seller/manage-orders'
        },
    
        {
            label: 'Shipping',
            href:'/seller/shipping'
        },
        {
            label: 'Account Settings',
            href:'/seller/account-settings'
        },
    ]




    return (
        <div className='relative min-w-[300px]  min-h-full flex flex-col '>
        
            <div className='flex flex-col justify-between '>
                <div className=' divide-y border-y' >
                    {NavPaths.map((path , index)=> 
                        <div key={index}>
                            <div>
                                <button onClick={()=> navigate(path.href)} className='text-sm text-start px-5 py-3 hover:bg-secondary-white w-full duration-300'>{path.label}</button>
                            </div>
                        </div>
                    
                    )}
                </div>
            </div>
            
            <div className='flex-1 h-full flex items-end' >
                {/* <button onClick={Logout} className='text-lg text-primary-red text-start px-5 py-3 hover:bg-secondary-white w-full duration-300 '>{'LOGOUT'}</button> */}
            </div>
        </div>
    )
}
