import React, { useEffect, useMemo } from 'react'
import {
    Navbar,
    Button,
    IconButton,
    Input,
    Collapse,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from '@material-tailwind/react'
import {FaBars, FaUser} from 'react-icons/fa'
import {BsFillCartFill} from 'react-icons/bs'
import {BiX} from 'react-icons/bi'
import { Logout } from 'service/auth'
import { useNavigate } from 'react-router-dom'
import { ArtCategoriesMenu } from 'components/AppNavigationbar/ArtCategoiesMenu'
import logo from 'assets/pintado5whitetext.png'  
import { atom, useAtom, useAtomValue } from 'jotai'
import { authAtom } from 'store/authAtom'
import { GetCollectionDatas } from 'service/firebase'
import { ArtType } from 'service/arts/schema'

const userCart = atom<ArtType[]>([])

export const AppNavigationBar = () => {
    const [openNav, setOpenNav] = React.useState(false)
    const user = useAtomValue(authAtom)
    const navigate = useNavigate()

    const [cartItems , setCartItems] = useAtom(userCart)

    React.useEffect( () => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        )
    }, [])



    const GetAllCartItems = async () => {
        const data = await GetCollectionDatas(`Users/${user?.userId}/cart`)
        setCartItems(data as ArtType[])
    }

    
    useEffect(()=>{GetAllCartItems()},[])

    const items = useMemo(()=>cartItems , [cartItems])

    

    const paths = [
        {
            label : 'Home',
            href:'/',
        },
        {
            label : 'artCategories',
            href:'#',
        },

    ]






    const AccountMenu = [
        {
            label: 'Account Settings',
            href:'/account-settings'
        },
        {
            label: 'Track My Orders',
            href:'/account-settings'
        },
        {
            label: 'Favorites',
            href:'/account-settings' 
        },
        {
            label: 'View Cart',
            href:'/cart'
        },
    ]


    const NavList = (
        <ul className='flex flex-col lg:flex-row lg:gap-10 p-2 text-primary-black'>
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
        <Navbar className=' sticky top-0 border-none z-10 h-fit max-w-full rounded-none p-0'>
            <div className='bg-primary-brown p-4 lg:flex justify-between hidden  items-center'>
                <a href='/' className='text-2xl font-bold '>
                    {/* Pintado */}
                    <img src={logo} className='max-h-[50px] p' alt="logo"/>
                </a>

                <div>
                    <input className='bg-secondary-red rounded-lg placeholder:text-primary-black text-primary-black outline-none min-w-[500px] text-sm p-2' placeholder='Search'/>
                </div>
                <div className='flex items-center  gap-4'>
                    <div className='flex  '>
                        <div className='flex items-center text-3xl mx-4'>
                            <Menu allowHover >
                                <MenuHandler >
                                    <button className='flex justify-center text-center text-sm px-3 items-center'><FaUser/><div className='text-sm mx-2'>Account</div></button>
                                </MenuHandler>
                                <MenuList className='flex flex-col gap-4 min-w-[250px] max-w-[260px]'>

                                    {user && 
                                    <div className='p-2'>
                                        <div className=' font-bold w-full overflow-ellipsis whitespace-nowrap'>
                                            { user?.firstname +' ' + user?.lastname}
                                        </div>
                                        <div className='uppercase text-[8px] font-bold bg-primary-red text-primary-white border rounded-full w-fit px-2 bg-primary'>{user.userType}</div>
                                    </div>
                                    }
                                    {user && <MenuItem  onClick={()=>navigate(`/profile/${user ? user.userId : ''}`)}> View Profile</MenuItem>}

                                    {user && AccountMenu.map((item , index)=> <MenuItem onClick={()=>navigate(item.href)} key={index}>{item.label}</MenuItem> )}

                                    <MenuItem className=' bg-primary-red text-white p-2 text-center hover:bg-primary-red/70 hover:text-white'>
                                        {user  ?  <div className='w-full' onClick={()=>Logout()}>Logout</div> :
                                            <div className='w-full ' onClick={()=>navigate('/login')}>Sign In / Sign Up</div>
                                        }
                                    </MenuItem>
                                </MenuList>
                            </Menu>

                            <button className='bg-transparent' onClick={()=> navigate('/cart')}>
                                <div className='flex justify-center text-center text-sm px-3 items-center'><BsFillCartFill/><div className='text-sm mx-2 flex items-center gap-2'>
                                    My Cart<div className='text-[11px] text-primary-red bg-white rounded-full p-1'>{items.length}</div>
                                </div>
                                </div>
                            </button>


                        </div>

                    </div>
                </div>
            </div>
          
            <div>
                <div className=" hidden lg:flex">{NavList}</div>
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
                <Button variant="gradient" size="sm" fullWidth className="text-white" onClick={()=>Logout()}>
                    <span>Logout</span>
                </Button>
            </Collapse>

            
        </Navbar>

    )
}
