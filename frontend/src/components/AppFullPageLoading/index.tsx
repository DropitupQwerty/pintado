import React from 'react'

type AppFullPageLoadingProps = {
    isLoading?: boolean
}

export const AppFullPageLoading = (props : AppFullPageLoadingProps) => {

    return (
        <div className='min-h-full min-w-full z-999 bg-black/80 absolute flex justify-center items-center'>
            
        </div>
    )
}
