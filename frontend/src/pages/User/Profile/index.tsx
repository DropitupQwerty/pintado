import { useAtomValue } from 'jotai'
import React, { useMemo } from 'react'
import { authAtom } from 'store/authAtom'
import { GetDocument } from 'service/firebase'
import { useParams } from 'react-router-dom'
import { UserTokenType } from 'service/auth/schema'
import { ArtType } from 'service/arts/schema'
import { GetArtCollectionByUserId } from 'service/arts'
import { Button } from '@material-tailwind/react'
import { BiCartAdd } from 'react-icons/bi'

export const Profile = () => {
    const user = useAtomValue(authAtom)
    const [profileUser,  setProfileUser] = React.useState<UserTokenType | null>(null)
    const params = useParams()
    const {id} = params ?? ''
    const [isLoading , setIsLoading ] = React.useState(false)
    const [arts , setArts] = React.useState<ArtType[]>()


    useMemo( async ()=>{ 
        const GetUserData = async ()=> {
            setIsLoading(true)
            const userData =  await GetDocument('Users' , id ? id : '' )
            setProfileUser(userData.data() as UserTokenType)

            const items = await GetArtCollectionByUserId(id ? id : '')      
            setArts(items as ArtType[])
            setIsLoading(false)

        
        
        }


      
        GetUserData()
        
    },[])



    const products= useMemo(()=> arts , [arts])

   
   
    console.log(profileUser)
   
   
    if (isLoading) {
        return <h1>Page is loading</h1>
    }

   
    return (
        <div>
            <div className='container mx-auto m-[5%]'>
                <div>

                    <div className='font-bold my-4'>
                        <div className=' text-4xl'>{profileUser?.firstname} {profileUser?.lastname}</div>
                        <div className='text-md font-normal text-primary-red'>@Bigpatty</div>
                    </div>

                </div>
                <div className='mt-10'>
                    <div className='text-2xl font-bold'>About</div>
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, asperiores dolorem doloremque nulla eligendi, deserunt sequi hic soluta voluptas eveniet deleniti aut maxime eius. Suscipit consequatur beatae exercitationem deleniti ab?
                        Laudantium aspernatur tempora atque nihil. Inventore, architecto error est quidem dolor eaque numquam, necessitatibus omnis aperiam repudiandae culpa maiores libero qui recusandae rem dignissimos deserunt! Sit nam nisi nemo repudiandae!</p>
                    </div>
                </div>
                {user?.userType == 'seller' && <Button className='flex gap-2 items-center my-2'>Sell you arts? <BiCartAdd className='text-xl'/></Button>}

                <div className='w-full'>
                    <div className='grid-cols-3 grid '>
                        {products?.map((artwork, index)=>
                            <div key={index}  className='w-full h-auto p-2 '> 
                                <img className=' object-cover h-full w-full rounded-lg overflow-hidden shadow-md' src={artwork.imageUrl}/>
                            </div>)}
                        <img/>
                    </div>
                </div>
            </div>
        </div>
    )
}
