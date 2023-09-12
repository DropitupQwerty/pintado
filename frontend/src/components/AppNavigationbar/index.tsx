import React from 'react'
import {AiOutlineUser , AiOutlineHeart , AiOutlineShoppingCart} from 'react-icons/ai'
import {
    Navbar,
    Button,
    IconButton,
    Input,
    Collapse
} from '@material-tailwind/react'
import {FaBars} from 'react-icons/fa'
import {BiX} from 'react-icons/bi'
  

export const AppNavigationBar = () => {
    const [openNav, setOpenNav] = React.useState(false)
 
    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        )
    }, [])



    const paths = [
        {
            label : 'Home',
            href:'#',
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
                    Pintado 5 
                </div>

                <div>
                    <Input variant='static'  placeholder="Search" className='text-white placeholder:text-white min-w-[400px]' crossOrigin={undefined}/>
                </div>
                <div className='flex items-center gap-4'>

                    <div className='flex items-center gap-2'>
                        <div className='font-bold'>Currency</div>
                        <div>
                            <select className='text-black'>
                                <option>PHP</option>
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex items-center text-3xl'>
                        <div className='flex justify-center text-center border-r-2 px-3'><AiOutlineUser /></div>
                        <div className='flex justify-center text-center border-r-2 px-3'><AiOutlineHeart /></div>
                        <div className='flex justify-center text-center  px-3'><AiOutlineShoppingCart/></div>
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
                    <span>Buy Now</span>
                </Button>
            </Collapse>
        </Navbar>

    )
}
