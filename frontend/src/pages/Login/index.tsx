import { Button } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'

export const Login = () => {
    return (
        <AppUserLayout>
            <div className='min-h-full flex flex-col justify-between '>
                <div>
                    <div>
                        <div className='text-center my-2'>Home / <span className="text-primary-red">Login</span></div>
                    </div>			
                    <div className='font-bold text-4xl text-center'>Sign In</div>
                </div>

                <div className='flex gap-4 h-full m-[2%]'>
                    <div className='p-[2%] w-full'>
                        <Input  label="Email"  crossOrigin={undefined} />
                        <Input  label="Password"  type='Password' crossOrigin={undefined} />
                    </div>
                    <div className='p-[3%] w-full bg-secondary-white'>

                        <div className='text-3xl'>New Customer?</div>
                        <div>
                            <div className='text-2xl'>Create an account with us and you&apos;ll be able to:?</div>
                            <ul className='list-disc'>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Acces your order history</li>
                                <li>Track new orders</li>
                                <li>Save Items to your wish list</li>
                            </ul>
                            <Button className='bg-primary-red my-2'>Sign up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </AppUserLayout>
    )
}
