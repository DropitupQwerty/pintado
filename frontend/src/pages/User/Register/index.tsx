import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@material-tailwind/react'
import { AppInputMap } from 'components/AppInputTypes/AppInputMap'
import React from 'react'
import { useForm } from 'react-hook-form'
import { RegisterApi } from 'service/auth'
import { RegisterSchema, RegisterType } from 'service/auth/schema'

export const Register = () => {

    const Fields =  [
        {
            fields : [
                {label: 'Email Address' , type : 'text' , name:'email'},
                {label: 'Password' , type : 'password' , name:'password'}
            ]
        },
        {
            fields : [
                {label: 'Confirm Password' , type : 'password' , name:'confirmPassword'},
                {label: 'First Name' , type : 'text' , name:'firstname'}
            ]
        },
        {
            fields : [
                {label: 'Last Name' , type : 'text' , name:'lastname'},
                {label: 'Addrerss Line 1' , type : 'text' , name:'address1'}
            ]
        },
        {
            fields : [
                {label: 'Addrerss Line 2' , type : 'text' , name:'address2'},
                {label: 'Subsurb City' , type : 'text' , name:'suburbCity'}
            ]
        },
        {
            fields : [
                {label: 'Contry' , type : 'text' , name:'country'},
                {label: 'State/Province' , type : 'text' , name:'province'}
            ]
        },
        {
            fields : [
                {label: 'Zip/Postalcode' , type : 'text' , name:'zipCode'},
                {label: 'Phone number' , type : 'text' , name:'phoneNumber'}
            ]
        },
        
    ]



    const { handleSubmit , control } = useForm<RegisterType>({
        resolver:zodResolver(RegisterSchema)
    })
    
    
    const onSubmit = (data : RegisterType ) => {
        RegisterApi(data)
    }


    return (
        <div className='h-full w-full flex flex-col '>
            <div className='m-10'>
                <div>
                    <div className=' '>Home / <span className="text-primary-red">Create New Account</span></div>
                </div>			
                <div className='font-bold text-3xl '> New Account</div> :
            </div>
            <div className=' flex justify-center flex-col items-center w-full h-full p-[2%]'>
                <div className='w-full '>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                        <AppInputMap<RegisterType> fields={Fields} control={control} containerInputsClassName='gap-2 '/>
                        <Button type='submit' className='max-w-[200px] self-center my-10 rounded-full'>Create Account</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
