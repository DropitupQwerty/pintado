import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {
    Navbar,
    Button,
    IconButton,
    Input,
    Collapse
} from '@material-tailwind/react'
import {FaBars, FaUser} from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'
import {BiX} from 'react-icons/bi'
import { Logout } from 'service/auth'
import { useNavigate } from 'react-router-dom'
import { ArtCategoriesMenu } from 'components/AppNavigationbar/ArtCategoiesMenu'
import { authAtom } from 'store/authAtom'
import { useAtomValue } from 'jotai/react'
  

export const AppNavigationBar = () => {
    const auth = useAtomValue(authAtom)
    const [openNav, setOpenNav] = React.useState(false)
    const user = localStorage.getItem('token')
    const navigate = useNavigate()
 
    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        )
    }, [])


    console.log('====================================')
    console.log(auth)
    console.log('====================================')


    const paths = [
        {
            label : 'Home',
            href:'/',
        },
        {
            label : 'artCategories',
            href:'#',
        },
        {
            label : 'Handmade Paintings',
            href:'#',
        },
        {
            label : 'Art Prints',
            href:'#',
        },
        {
            label : 'All',
            href:'#',
        },
    ]




    const userAccess = [
        {
            label : 'User',
            icon: <FaUser />,
            href:'/account',
        },
        {
            label : 'Favourites',
            icon:<AiFillHeart/>,
            href:'/favourites',
        },
        {
            label : 'Cart',
            icon:<BsFillCartFill/>,
            href:'/cart',
        },
    ]


    const NavList = (
        <ul className='flex flex-col lg:flex-row lg:gap-10 p-2 text-primary-black lg:text-white'>
            {
                paths.map((path, index)=> path.label === 'artCategories' ? <ArtCategoriesMenu key={index}/> :
                    <li key={index}>
                        <button className='text-sm' onClick={()=> navigate(path.href)} >
                            {path.label}  
                        </button>
                    </li>)
            }

        </ul>
    )






    return (
        <Navbar className='text-white sticky top-0 border-none z-10 h-fit max-w-full rounded-none p-0'>
            <div className='bg-primary-brown p-4 lg:flex justify-between hidden  items-center'>
                <div className='text-2xl font-bold lowercase'>
                    {/* Pintado 5  */}
                </div>

                <div>
                    <input className='bg-secondary-red rounded-lg placeholder:text-primary-black text-primary-black outline-none min-w-[500px] text-sm p-2' placeholder='Search'/>
                </div>
                <div className='flex items-center gap-4'>

    

                    <div className='flex'>
                        <div className='flex items-center text-3xl mx-4'>
                            {userAccess.map((userPath , index)=>  
                                <button key={index} className='bg-transparent' onClick={()=> navigate(`${userPath.href}`)}>
                                    <div className='flex justify-center text-center text-sm px-3 items-center'>{userPath.icon}<div className='text-sm mx-2'>{userPath.label}</div></div>
                                </button>
                            )}
                        </div>
                        <div className='min-w-[150px]'>
                            {user  ?  <Button className='w-full' onClick={()=>Logout()}>Logout</Button> : <Button className='w-full ' onClick={()=>navigate('/login')}>Sign In</Button>}
                        </div>
                    </div>
                </div>
            </div>
          
            <div>
                <div className=" hidden lg:block bg-primary-red">{NavList}</div>
            </div>
            <div className='flex w-full lg:hidden   items-center relative justify-center p-2'>
                <IconButton
                    variant="text"
                    className="text-primary-black text-2xl  absolute left-0"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <BiX/>
                    ) : (
                        <FaBars/>
                    )}
                </IconButton>
                <div>
                    <Input variant='static'  placeholder="Search" className=' placeholder:text-black ' crossOrigin={undefined}/>
                </div>
            </div>

            <Collapse open={openNav} >
                {NavList}
                <Button variant="gradient" size="sm" fullWidth className="">
                    <span>Logout</span>
                </Button>
            </Collapse>

            
        </Navbar>

    )
}
