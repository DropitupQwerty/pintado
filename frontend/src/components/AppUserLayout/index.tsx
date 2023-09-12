import { AppNavigationBar } from 'components/AppNavigationbar'
import React from 'react'

type AppUserLayoutProps = {
    children : React.ReactNode
}


export const AppUserLayout = (props : AppUserLayoutProps) => {
    return (
        <div>
            <div>

                <div>
                    <AppNavigationBar/>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}
