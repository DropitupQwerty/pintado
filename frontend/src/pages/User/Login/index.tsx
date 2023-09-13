import { Button , Input } from '@material-tailwind/react'
import React from 'react'
import { useForm , Controller } from 'react-hook-form'
import { LoginSchema, LoginType } from 'service/auth/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginApi } from 'service/auth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
    })
  
    const signInUser = async (data: LoginType) => {
        await LoginApi(data).then(async (user) => {
            if (user) {
                localStorage.setItem('token', JSON.stringify(await user.getIdToken()))
                localStorage.setItem('user', JSON.stringify(user))
                window.location.replace('/')
            }   
        })
    }
  
    return (
        <div className='min-h-full flex flex-col lg:justify-between '>
            <div className=' my-10'>
                <div>
                    <div className='text-center '>Home / <span className="text-primary-red">Login</span></div>
                </div>			
                <div className='font-bold text-3xl text-center'>Sign In</div> :
            </div>

            <div className='flex gap-4 h-[50vh] lg:m-[2%]  flex-col lg:flex-row '>
                <form onSubmit={handleSubmit(signInUser)} className='p-[3%] w-full flex flex-col gap-5'>
                    <div>
                        <Controller
                            control={control}
                            name="email"
                            render={({
                                field: { onChange, value, name },
                                fieldState: { error },
                            }) => (
                                <Input  label="Email" onChange={onChange} value={value} name={name}  crossOrigin={undefined}  error={!!error}/>
                            )}
                        />
                     
                    </div>
                    <div>
                        <Controller
                            control={control}
                            name="password"
                            render={({
                                field: { onChange, value, name },
                                fieldState: { error },
                            }) => (
                                <Input  label="Password" type='password' onChange={onChange} value={value} name={name}  crossOrigin={undefined}  error={!!error}/>
                            )}
                        />
                     
                    </div>

                    <div className='flex items-center gap-4 justify-center  lg:flex-row flex-col lg:justify-normal'>
                        <Button type='submit'>Sign In</Button>
                        <div>
                            <a className=''>Forgot your password?</a>
                        </div>
                    </div>
                </form>
                <div className='p-[3%] w-full bg-secondary-white rounded-lg '>
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
                            <Button className='bg-primary-red ' onClick={()=> navigate('/register')}>Sign up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
