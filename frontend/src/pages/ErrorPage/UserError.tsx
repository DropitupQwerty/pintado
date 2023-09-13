import React from 'react'
import {TbError404Off} from 'react-icons/tb'

export const UserError = () => {
    return (
        <div className='min-h-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <TbError404Off className='text-4xl'/>
                <div className='text-xl'><span className="font-bold text-primary-red">404</span> not found</div>
                <div>Some pages are under construction</div>
            </div> 
        </div>
    )
}
