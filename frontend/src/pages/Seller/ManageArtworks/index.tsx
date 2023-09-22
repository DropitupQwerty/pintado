import { Button } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ManageArtworks = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <div className='w-full '>
                <Button onClick={()=> navigate('/seller/upload')}>UploadArt</Button>
            </div>

        </div>
    )
}
