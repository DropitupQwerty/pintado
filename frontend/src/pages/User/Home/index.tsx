import { paintings } from 'mockdata/images/HandMadeImages'
import React from 'react'
import {

    Button,
} from '@material-tailwind/react'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate = useNavigate()
    const [showMore , setShowMore ] = React.useState(false)
    const sampleItems = paintings

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }

    const Items =showMore ?  sampleItems : sampleItems.slice(0,10)


    return (
        <div className='h-full bg-secondary-white'>
            <div className='h-full w-full  flex flex-wrap mx-auto justify-center cursor-pointer'>
                {Items.map((item, index) => (
                    <div
                        key={index}
                        onClick={()=>navigate(`${item.author + '/' + item.category+ '/' + item.id}`)}
                        className={twMerge(
                            ' w-auto relative flex items-center justify-center  m-1 h-[300px]',
                        )}
                    >
                        <img src={item.imageUrl} className='h-full w- object-cover' />
                        <div className='h-full w-full text-center absolute flex items-center justify-center text-primary-white hover:opacity-100 opacity-0 transition-all duration-300 hover:bg-primary-black/70'>
                            <div className='w-full'>
                                <div className='w-full overflow-ellipsis '>{item.title}</div>
                                <div>by: <span className="text-primary-red">{item.author}</span></div>
                                <div className='text-xl'>₱{item.price}</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {!showMore ? 
                <div className='flex justify-center '>
                    <Button onClick={toggleShowMore} className='rounded-full min-w-[200px] p-1' size='sm'>Show More</Button>
                </div> : ''
            } 
        </div>
    )
}
