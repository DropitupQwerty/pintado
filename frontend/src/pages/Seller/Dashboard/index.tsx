import { Button } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const navigate = useNavigate()

    return (
        <div>Dashboard
            <Button onClick={()=> navigate('/seller/upload')}>UploadArt</Button>
        </div>
    )
}
