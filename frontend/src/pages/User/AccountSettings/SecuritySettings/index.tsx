import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@material-tailwind/react'
import { AppInputMap } from 'components/AppInputTypes/AppInputMap'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ChangePasswordSchema, ChangePasswordType } from 'service/user/schema'
import { InputFieldType } from 'types/inputFieldType'


const Field: InputFieldType[] = [
    { fields : [{ label: 'Password',  type : 'password', name: 'password'}]},
    { fields : [{ label: 'Confirm Password',  type : 'password', name: 'confirmPassword'}]}
]




export const SecuritySettings = () => {
    const { handleSubmit , control} = useForm<ChangePasswordType>({
        resolver : zodResolver(ChangePasswordSchema)
    })
    

    const onSubmit = (data : ChangePasswordType) =>  {
        console.log(data)
    } 
    
    return (
        <div className='flex h-full flex-col'>
            <div className=' text-center text-xl font-bold mb-5'>Change password</div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 h-full flex flex-col justify-between '>
                <div>

                    <p className='text-sm opacity-80 my-2'>
                Please input password at least 6 characters
                    </p>
                    <AppInputMap fields={Field} control={control}/> 
                </div>
                <Button className='max-w-[200px]' type="submit">Submit</Button>
            </form>
        </div>
    )
}
