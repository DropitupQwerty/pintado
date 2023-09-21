import React, { useEffect, useMemo} from 'react'
// import {

//     Button,
// } from '@material-tailwind/react'
import { twMerge } from 'tailwind-merge'
import { useNavigate } from 'react-router-dom'
import { ArtType } from 'service/arts/schema'
import { GetArtCollection } from 'service/arts'


export const Home = () => {
    const navigate = useNavigate()
    // const [showMore , setShowMore ] = React.useState(false)
    const [arts , setArts ] = React.useState<ArtType[]>()
    const [isLoading, setIsLoading] = React.useState(false)

    const getArts  = async ()=> {
        setIsLoading(true)
        const items = await GetArtCollection()      
        setArts(items as ArtType[])
        setIsLoading(false)
    }


    useEffect(()=>{
        getArts()
    },[])
    const products= useMemo(()=> arts , [arts])

    

    if(isLoading){
        return <div>Isloading</div>
    }

    return (
        <div className='min-h-full mt-10'>
            <div className='mx-auto container'>
                <h1 className='text-xl'>Featured Collection</h1>
                <div className='h-full w-full  flex flex-wrap  justify-center cursor-pointer '>
             
                    {products?.length ? products.map((item, index) => (
                        <div
                            key={index}
                            onClick={()=>navigate(`${item.author + '/' + item.category+ '/' + item.id}`)}
                            className={twMerge(
                                ' w-auto relative flex items-center justify-center  m-1 md:h-[250px]',
                            )}
                        >
                            <img src={item.imageUrl} className='h-full object-cover' />
                            <div className='h-full w-full text-center absolute flex items-center justify-center text-primary-white hover:opacity-100 opacity-0 transition-all duration-300 hover:bg-primary-black/70'>
                                <div className='w-full'>
                                    <div className='w-full overflow-ellipsis '>{item.title}</div>
                                    <div>Artist: <span className="text-primary-red">{item.author}</span></div>
                                    <div className='text-xl'>₱{item.price}</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )): null}
                </div>
            </div>
            {/* {!showMore ? 
                <div className='flex justify-center '>
                    <Button onClick={toggleShowMore} className='rounded-full min-w-[200px] p-1' size='sm'>Show More</Button>
                </div> : ''
            }  */}
        </div>
    )
}
