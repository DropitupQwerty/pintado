import { AppUserLayout } from 'components/AppUserLayout'
import { paintings } from 'mockdata/images/HandMadeImages'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Button , Rating } from '@material-tailwind/react'
import { AiFillStar ,AiOutlineStar } from 'react-icons/ai'


export const Item = () => {
    const params = useParams()
    const { itemId } = params

    //Query Here    
    const product = React.useMemo(()=>paintings.find((p)=> itemId === p.id.toString()) ?? null, [])

    console.log(product)


    


    const ItemNotFound  = (
        <div className='flex justify-center items-center h-full'>
            <div>
                Item Not Found
            </div>
        </div>
    )




    const ItemData = (
        <div>

            <div className='flex flex-col w-[90%]  p-[2%]  container mx-auto'>
                <div className='p-[2%]'>Home / Collection Art Prints  / <span className='text-primary-red'>{product?.title}</span></div>
                <div className='flex gap-4'>
                    <div className=' max-w-[400px]'>
                        <div className='mb-3  border '>
                            <div className='flex min-h-[450px] bg-white'>
                                <img  className=" object-contain" src={product?.imageUrl}/>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div className='bg-primary-brown p-2'>
                            <div className='font-bold text-lg'>Description :</div>
                            {product?.description}
                        </div>
                    </div>
                    <div className='p-[2%]'>
                        <div>
                            <div className='text-2xl'>{product?.title} - {product?.canvasSize}</div>
                        </div>
                        <div>
                            <div className='text-md'>Size in centimeter- {product?.canvasSize}</div>
                        </div>
                        <div>
                            <div className='text-md'>by : <span className="text-primary-red">{product?.author}</span></div>
                        </div>
                        <div>
                            <div className='text-xl font-bold'>₱{product?.price}</div>
                        </div>
                        <div className='my-4'>
                            <div>Select Frame </div>
                            <div className='flex'>
                                {product?.frameDesigns.map((frameDesign, index)=>
                                    <button key={index} className='max-h-[90px] max-w-[90px] bg-primary-white target:border-primary-red open:border p-2'>
                                        <img src={frameDesign.frameImage} className='h-full w-full object-contain'></img>
                                    </button>)}
                            </div>
                        </div>

                        <div className='flex  gap-2'>
                            <div className='flex gap-1'> 
                                <Button className='min-w-[200px] '>Buy</Button>
                            </div>
                            <div className=''> 
                                <Button className='min-w-[200px] bg-primary-black'>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex items-center flex-col justify-center'>
                    <div className=' my-4 text-center font-bold text-2xl'>Ratings</div>
                    <div className='flex items-center gap-4'><Rating ratedIcon={<AiFillStar className=''/> } unratedIcon={<AiOutlineStar className='text-3xl'/>}  value={4} readonly unratedColor='red' className='' /><span className='text-sm font-bold'>4.5</span></div>
                </div>

                <div className='flex flex-col gap-4 my-4'>
                    {product?.ratings.map((rating)=> <div className='bg-secondary-white min-h-[100px] max-h-[300px] p-[2%] border' key={rating.userId}>
                        <div className='flex justify-between '>
                            <div className='font-bold'>Jacob Allen Valderama</div>
                            <div><Rating readonly  value={rating.rating}/></div>
                        </div>
                        <div >
                            <div>{rating.feedback}</div>
                        </div>
                    </div>)}
                </div>

            </div>
            <div>
            </div>
        </div>
    )
    

    return (
        <AppUserLayout>
            <div className='h-full container mx-auto'>
                {product ? ItemData :ItemNotFound} 
            </div>
        </AppUserLayout>
    )
}
