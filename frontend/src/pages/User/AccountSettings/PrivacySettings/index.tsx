import { Button,  Textarea } from '@material-tailwind/react'
import { AppInputMap } from 'components/AppInputTypes/AppInputMap'
import React from 'react'
import { useForm } from 'react-hook-form'

export const PrivacySettings = () => {
    const Fields = [
        {
            fields : [
                {label:'Username'  , type:'text' , name: 'fisrtname' , className: 'lg:w-1/2 lg:pr-2' },
            ]
        },
        {
            fields : [
                {label:'First Name' , type:'text' , name: 'fisrtname' },
                {label:'Last Name' , type:'text' , name: 'lastname' }
            ]
        },
        {
            fields : [
                {label:'About Me' , type:'textarea' , name: 'firstname' },
            ]
        },
        
    ]


    const { control } = useForm()



    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='w-full flex-col justify-center items-center'>
                <div>
                    <p className='text-sm opacity-80 my-3'>
            Your username will display as your author name  
                    </p>
                </div>

                <div className=' flex flex-col  md:w-[70%]'>
                    <div>User Information</div>
                    <AppInputMap fields={Fields} control={control}/>
                </div>
                <div>
                    <div>Shipping Address</div>
                    <div className='p-2 w-[70%]'>
                        <Textarea color='red' variant='standard' placeholder='Address'/>
                    </div>
                </div>
            </div>



            <div className='flex gap-2 p-2 '>
                <Button className='min-w-[200px]'>Save</Button>
                <Button className='bg-primary-black/80 min-w-[200px] text-white shadow-none hover:shadow hover:shadow-primary-black'>Cancel</Button>
            </div>
        </div>
    )
}
