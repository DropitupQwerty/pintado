import { Button } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'

export const Login = () => {
    return (
        <AppUserLayout>
            <div className='min-h-full flex flex-col lg:justify-between '>
                <div>
                    <div>
                        <div className='text-center my-2'>Home / <span className="text-primary-red">Login</span></div>
                    </div>			
                    <div className='font-bold text-3xl text-center'>Sign In</div>
                </div>

                <div className='flex gap-4 h-full lg:m-[2%]  flex-col lg:flex-row'>
                    <div className='p-[3%] w-full flex flex-col gap-5'>
                        <div>
                            <Input  label="Email"  crossOrigin={undefined} />
                        </div>
                        <div>
                            <Input  label="Password"  type='Password' crossOrigin={undefined} />
                        </div>

                        <div className='flex items-center gap-4 justify-center  lg:flex-row flex-col lg:justify-normal'>
                            <Button>Sign In</Button>
                            <div>
                                <a className=''>Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                    <div className='p-[3%] w-full bg-secondary-white rounded-lg'>
                        <div className='text-xl lg:text-2xl'>New Customer?</div>
                        <div className='text-lg lg:text-xl'>Create an account with us and you&apos;ll be able to? : </div>
                        <div className='p-[3%]'>
                            <ul className='list-disc'>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Acces your order history</li>
                                <li>Track new orders</li>
                                <li>Save Items to your wish list</li>
                            </ul>
                            <div className='text-center lg:text-start mt-5'>
                                <Button className='bg-primary-red '>Sign up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppUserLayout>
    )
}
