import { paintings } from 'mockdata/images/HandMadeImages'
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Button,
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const [showMore , setShowMore ] = React.useState(false)
    const navigate = useNavigate()
    const sampleItems = paintings
    const defaultCurrency = '₱'

    const toggleShowMore = () => {
        setShowMore(!showMore)
    }


    const Items =showMore ?  sampleItems : sampleItems.slice(0,10)

    return (
        <div className='h-full'>
            <div className='h-full '>
                <div className='h-full w-full justify-center lg:w-[90%] flex flex-wrap  mx-auto my-[2%] '>
                    {Items.map((item)=>
                        <Card onClick={()=>navigate(`${item.author}/${item.category}/${item.id}`)}  key={item.id} className='max-h-[400px] my-1 rounded-none w-1/2  lg:w-1/3 xl:w-1/5  shadow-md p-0'>
                            <CardHeader  floated={false}  className=' border  h-[200px] rounded-none m-[2%]'>
                                <img src={item.imageUrl} className='h-full w-full object-cover'/>
                            </CardHeader>
                            <CardBody className="">
                                <div className=''>{item.title}</div>
                                <div className=''>{item.canvasSize}</div>
                                <div className=''>By: <span className="text-primary-red">{item.author}</span></div>
                                <div className='text-primary-red'>{defaultCurrency}{item.price}</div>
                            </CardBody>
                        </Card>
                    )}
                
                    {!showMore ? 
                        <div className='flex justify-center w-full my-4'>
                            <Button onClick={toggleShowMore} className='rounded-full min-w-[200px] p-1' size='sm'>Show More</Button>
                        </div> : ''
                    } 
                </div>
            </div>
        </div>
    )
}
