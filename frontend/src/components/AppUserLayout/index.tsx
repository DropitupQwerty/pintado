import { AppNavigationBar } from 'components/AppNavigationbar'
import React from 'react'

type AppUserLayoutProps = {
    children : React.ReactNode
}


export const AppUserLayout = (props : AppUserLayoutProps) => {
    return (
        <div className='h-screen relative flex flex-col '>
            <AppNavigationBar/>
            <div className='flex-1 '>
                {props.children}
            </div>
        </div>
    )
}
