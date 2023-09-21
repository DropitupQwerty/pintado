import React from 'react'
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react'
import { BiChevronUp } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'



const dummyArtCategories = [
    {
        category: 'Painting',
        genres: ['Oil Painting', 'Watercolor', 'Acrylic Painting', 'Abstract Painting']
    },
    {
        category: 'Sculpture',
        genres: ['Bronze Sculpture', 'Wood Carving', 'Stone Sculpture', 'Abstract Sculpture']
    },
    {
        category: 'Photography',
        genres: ['Landscape Photography', 'Portrait Photography', 'Macro Photography', 'Street Photography']
    },
    {
        category: 'Digital Art',
        genres: ['Digital Painting', 'Vector Illustration', 'Pixel Art', '3D Modeling']
    },
    {
        category: 'Printmaking',
        genres: ['Etching', 'Linocut', 'Woodcut', 'Silkscreen Printing']
    }
]
  









export const ArtCategoriesMenu = () => {
    const [open , setOpen ] = React.useState(false)
    const artCategoies = dummyArtCategories




    return (
        <Menu allowHover open={open} handler={setOpen}>
            <MenuHandler>
                <a className='flex items-center cursor-pointer'>
                    <div className='text-sm'>
                        Art Categories
                    </div>
                    <div>
                        <BiChevronUp className={twMerge('text-lg ',open ? '' : 'rotate-180')}/>
                    </div>
                </a>
            </MenuHandler>
            <MenuList className=' text-sm ml-[2%] p-4  rounded-sm shadow-md outline-none border-none'>
                <div className='flex gap-5 outline-none border-none'>
                    {artCategoies.map((artCategory, index)=>
                        <div key={index} >
                            <div className='font-bold my-2'>{artCategory.category}</div>
                            <ul className='flex flex-col gap-2 text-sm'>
                                {artCategory.genres.map((genre , index)=>
                                    <li key={index} className='py-1'>
                                        <button  className='hover:underline duration-1000'>
                                            {genre}    
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )
                    }
                </div>
            </MenuList>
        </Menu>
    )
}
