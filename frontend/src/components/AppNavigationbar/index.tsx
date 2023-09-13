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
  

export const AppNavigationBar = () => {
    const [openNav, setOpenNav] = React.useState(false)
    const user = localStorage.getItem('token')
    const navigate = useNavigate()
 
    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        )
    }, [])



    const paths = [
        {
            label : 'Home',
            href:'/',
        },
        {
            label : 'Art Categories',
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
                paths.map((path, index)=>
                    <li key={index}>
                        <a className='text-sm'>
                            {path.label}  
                        </a>
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
                    <Input variant='static'  placeholder="Search" className='text-white placeholder:text-white min-w-[400px]' crossOrigin={undefined}/>
                </div>
                <div className='flex items-center gap-4'>

    

                    <div className='flex'>
                        <div className='flex items-center text-3xl mx-4'>
                            {userAccess.map((userPath , index)=> 
                                <button key={index} className='bg-transparent' onClick={()=> navigate(`${userPath.href}`)}>
                                    <div className='flex justify-center text-center border-r-2 px-3 '>{userPath.icon}</div>

                                </button>
                            )}
                        </div>
                        <div className='min-w-[100px]'>
                            {user  ?  <Button onClick={()=>Logout()}>Logout</Button> : <Button onClick={()=>navigate('/login')}>Login</Button>}
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
