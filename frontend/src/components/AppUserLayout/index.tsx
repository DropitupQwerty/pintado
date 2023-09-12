import { AppNavigationBar } from 'components/AppNavigationbar'
import React from 'react'

type AppUserLayoutProps = {
    children : React.ReactNode
}


export const AppUserLayout = (props : AppUserLayoutProps) => {
    return (
        <div className='h-screen border border-orange-400 flex flex-col'>
            <div className='h-fit'>
                <div>
                    <AppNavigationBar/>
                </div>
            </div>
            <div className='flex-1 '>
                {props.children}
            </div>
        </div>
    )
}
