import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SideBar = () => {
    const navigate = useNavigate()


    const NavList = [
        {
            label : 'Privacy',
            href: 'privacy'
        },
        {
            label : 'Security',
            href: 'security'
        },
    ]


    return (
        <div className='max-w-[300px] h-screen bg-primary-white border'>
            <div className='flex flex-col '>
                {NavList.map((item,index)=>
                    <button onClick={()=> navigate(item.href)} key={index} className='p-4 text-start  hover:bg-secondary-white m-2 rounded-xl'>
                        {item.label}
                    </button>)}
            </div>
        </div>
    )
}
