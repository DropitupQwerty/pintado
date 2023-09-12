import { Button , Input } from '@material-tailwind/react'
import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'
import { useForm , Controller } from 'react-hook-form'
import { LoginSchema, LoginType } from 'service/auth/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginApi } from 'service/auth'
import { Unsubscribe, onAuthStateChanged } from 'firebase/auth'
import { auth } from 'utilities/firebase'



export const Login = () => {
    const user = localStorage.getItem('user') === 'true' // Check if 'user' in localStorage is 'true'
    const [loggedIn, setLoggedIn] = React.useState<boolean>(user)
    const { control, handleSubmit } = useForm<LoginType>({
        resolver: zodResolver(LoginSchema),
    })
  
    const signInUser = async (data: LoginType) => {
        await LoginApi(data).then((user) => {
            if (user) {
                setLoggedIn(true)
                localStorage.setItem('user', 'true') // Update 'user' to 'true' when signed in
            }
        })
    }
  
    React.useEffect(() => {
        const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                localStorage.setItem('user', 'true')
                console.log(user) // Update 'user' to 'true' when signed in
            }
        })
  
        return () => {
            unsubscribe()
        }
    }, [])
  
    console.log(loggedIn)

    return (
        <AppUserLayout>
            <div className='min-h-full flex flex-col lg:justify-between '>
                <div>
                    <div>
                        <div className='text-center my-2'>Home / <span className="text-primary-red">Login</span></div>
                    </div>			
                    <div className='font-bold text-3xl text-center'>Sign In</div> :
                </div>

                <div className='flex gap-4 h-full lg:m-[2%]  flex-col lg:flex-row'>
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
