import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo, useState } from 'react'
import { GetUnApprovedData } from 'service/arts'
import { ArtType } from 'service/arts/schema'

export const ArtRequest = () => {
    const [art , setArt] = useState<ArtType[]>()


    const GetUnApprovedCollection = async () => { 
        const data =  await GetUnApprovedData()
        setArt(data as ArtType[])
    }

    useEffect(()=>{
        GetUnApprovedCollection()
    } ,[])
    
    
    const data = useMemo(()=> art ,[art])


    if(!data) { 
        return <div>
            <h1>Page is loading</h1>
        </div>
    }
    
        
    return (
        <div className='bg-white p-[4%] rounded-xl'>
            <table className='w-full  bg-white rounded-lg overflow-hidden'>
                <thead className='text-md  bg-primary-red  text-white'>
                    <th className='p-[.5%] '>Preview</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Genre</th>
                    <th>Approve</th>
                    <th>Decline</th>
                </thead>   
                <tbody className='divide-y-2'>
                    {data?.map((art , index) => { 
                        return  <tr key={index} className='text-center ' >
                            <td className='p-[2%] flex items-center justify-center '>
                                <div className='flex flex-col'>
                                    <img src={art.imageUrl} className='max-h-[200px] w-auto object-cover'/>
                                    <div className='font-bold italic'>
                                        {art.title}
                                    </div>
                                </div>
                            </td>
                            <td className='text-primary-red'>{art.author}</td>
                            <td>{art.price}</td>
                            <td className='max-w-[200px]'>{art.description}</td>
                            <td>{art.category}</td>
                            <td>{art.category}</td>
                            {/* <td>{art.approve}</td> */}
                            <td><Button>Approve </Button></td>
                            <td><Button className='bg-primary-black'>Decline</Button></td>
                        </tr>
                    })
                    }

                </tbody>

            </table>

        </div>
    )
}
