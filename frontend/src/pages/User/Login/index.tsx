import { Button , Input } from '@material-tailwind/react'
import React from 'react'
import { useForm , Controller } from 'react-hook-form'
import { LoginSchema, LoginType } from 'service/auth/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginApi } from 'service/auth'
import { useNavigate } from 'react-router-dom'
import bgImage from 'assets/loginbg.jpg'
import { authAtom } from 'store/authAtom'
import { useSetAtom } from 'jotai/react'
import { GetDocument } from 'service/firebase'

export const Login = () => {
    const navigate = useNavigate()
    const setData = useSetAtom(authAtom)
    const { control, handleSubmit } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
    })
  
    const signInUser = async (data: LoginType) => {
     
        await LoginApi(data).then(async (user) => {
            if (user) {
                const userData = await GetDocument('Users' , user.uid)
                localStorage.setItem('token' , JSON.stringify(userData.data()))
                setData(userData.data())
                window.location.reload()
            }   
        })
 
    }
  
    return (
        <div className={'min-h-full flex flex-col lg:justify-between w-full'} style={{backgroundImage:`url(${bgImage})` , backgroundSize:'cover'}} >
            <div className=' m-10 text-white'>
                <div>
                    <div className=''>Home / <span className="text-primary-red">Login</span></div>
                </div>			
                <div className='font-bold text-3xl '>Sign In</div> 
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
                                <Input  label="Email" className='bg-white '  onChange={onChange} value={value} name={name}  crossOrigin={undefined}  error={!!error}/>
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
                                <Input  label="Password" className='bg-white' type='password' onChange={onChange} value={value} name={name}  crossOrigin={undefined}  error={!!error}/>
                            )}
                        />
                     
                    </div>

                    <div className='flex items-center gap-4 justify-center  flex-col lg:justify-normal'>
                        <Button className='min-w-[200px]' type='submit'>Sign In</Button>
                        <div>
                            <a className='text-white'>Forgot your password?</a>
                        </div>
                    </div>
                </form>
                <div className='p-[3%] w-full bg-secondary-white/80 backdrop-blur-md rounded-lg '>
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
