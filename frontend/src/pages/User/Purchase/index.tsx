import { Button } from '@material-tailwind/react'
import paintings from 'mockdata/images/HandMadeImages'
import React from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { ArtType } from 'service/arts/schema'
import { GetDocument } from 'service/firebase'

export const Purchase = () => {
    const [quantity , setQuantity] = React.useState(1)
    const params = useParams()
    const { author , category , productId } = params
    const [product , setProduct] = React.useState<ArtType | null>(null)

    React.useMemo ( async ()=> {
        
        const item = await GetDocument('Arts' , productId ? productId : '') ?? null
    
        setProduct(item?.data() as ArtType)
    }, [])

    

    const toggleIncrement = () => { 
        setQuantity(quantity + 1)
    }

    const toggleDecrrement = () => { 
        if(quantity > 1 ) { 
            setQuantity(quantity-1)
        }
    }

    const subtotal =product ? product?.price * quantity : 0
    const shippingFee = 500

    return (
        <div>
            <div className='m-10'>
                <div>
                    <div className=' '>Home / <span className="text-primary-red">Check Out</span></div>
                </div>			
                <div className='font-bold text-3xl '>Check out item</div> :
            </div>
            <div className='container mx-auto'>
                <div className='flex justify-evenly w-full'>
                    <div className='max-h-[300px] w-fit m-[2%]'>
                        <div className='text-center text-lg'>{product?.author}</div>
                        <img src={product?.imageUrl} className='max-h-[400px] max-w-[400px] object-cover'/>
                        <div className='my-5'><div>Your Frame :</div><div></div> </div>
                    </div>
                    <div className='w-1/2 flex flex-col justify-between'>
                        <div className=''>
                            <div className='text-2xl'>{product?.title} - {product?.canvasSize} inch</div>
                            <hr/>
                            <div className='flex justify-between text-md my-4'>
                                <div><div className='mb-2'>Price</div><div className='font-bold text-sm '>₱ {product?.price}.00</div></div>
                                <div>
                                    <div className='mb-2'>Quantity</div>
                                    <div className='flex items-center'>
                                        <button className='rounded-sm shadow-sm overflow-hidden' onClick={toggleIncrement}><BiChevronUp className='bg-secondary-white'/></button>
                                        <span className='w-[50px] text-center flex items-center text-sm justify-center'>{quantity}</span>
                                        <button className='rounded-sm shadow-sm overflow-hidden' onClick={toggleDecrrement}><BiChevronDown className='bg-secondary-white'/>
                                        </button>
                                    </div>
                                </div>
                                <div className='w-[100px] text-end'><div className='mb-2 '>Total</div><div className=' text-sm font-bold'>₱ {subtotal}.00</div></div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className=' w-1/2 text-md'>
                                <div className='flex justify-between gap-4'><div>Subtotal</div><div className='font-bold'>₱ {subtotal}.00</div></div>
                                <div className='flex justify-between gap-4'><div>Shipping Fee</div><div  className='font-bold'>₱ {shippingFee}.00</div></div>
                                <div className='flex justify-between gap-4'><div>Grand Total</div><div  className='font-bold'>₱ {subtotal+shippingFee}.00</div></div>
                            </div>
                            <Button className='my-[2%]'>Check out</Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
