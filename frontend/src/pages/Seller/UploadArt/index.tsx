import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@material-tailwind/react'
import { AppInputMap } from 'components/AppInputTypes/AppInputMap'
import { useAtomValue } from 'jotai'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AddDocuments, SetDocuments } from 'service/firebase'
import { UploadSingleImage } from 'service/sellerArt'
import { AddArtSchema, AddArtType } from 'service/sellerArt/schema'
import { authAtom } from 'store/authAtom'
















export const UploadArt = () => {
    const [imageArt , setImageArt] = React.useState<File | null >(null)
    const [previewImage , setPreviewImageArt] = React.useState<string>('')
    const auth = useAtomValue(authAtom)



    const Fields =  [
        {
            fields : [
                {label: 'Title' , type : 'text' , name:'title'},
            ]
        },
        {
            fields : [
                {label: 'Canvas Size' , type : 'text' , name:'canvasSize'},
            ]
        },
        {
            fields : [
                {label: 'Price' , type : 'text' , name:'price'},
            ]
        },
        {
            fields : [
                {label: 'Category' , type : 'text' , name:'category'},
                {label: 'Genre' , type : 'text' , name:'genre'}
            ]
        },
        {
            fields : [
                {label: 'Description' , type : 'textarea' , name:'description'}
            ]
        },

        
    ]



    const uploadArtOnFirebase = async (data : AddArtType) => {
        
        const docRef =  await  AddDocuments('Arts' ,{...data, approved:false , uploadBy: auth?.userId})

        if(imageArt){
            await UploadSingleImage(imageArt , `${auth?.userId}/${data.title +' '+ docRef.id}` as string).then((url)=>{
                if(url) {
                    const docData ={...data ,id:docRef.id ,  imageUrl: url , approved:false , uploadBy: auth?.userId}
                    SetDocuments('Arts' ,`${docRef.id}`,docData , true)
                }
            })
        }
    }


    const uploadPersonalArt = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]

        e.preventDefault()
        setImageArt(file)
        setPreviewImageArt(URL.createObjectURL(file as Blob) )
        URL.revokeObjectURL(previewImage)
    }


    const { handleSubmit , control  } = useForm<AddArtType>({
        resolver:zodResolver(AddArtSchema)
    })
    
    
    const onSubmit = async (data : AddArtType) => {
        console.log('clicked')
        
        uploadArtOnFirebase(data)
    }


    return (    
        <div className='min-h-full flex flex-col items-center justify-center'>
            <div className='container mx-auto h-full'>
                <div className='my-4'>
                    <div className='text-3xl text-start '> Sell your Art</div>
                    <p className='text-md text-start p-1 text-primary-red '> Only upload your personal art . Uploading copied image might cause of declining the image or banning of your account </p>
                </div>
                <div className=' flex gap-2 items-center h-full'>
                    <div className=' w-full'>
                        <div className='border  my-4  min-h-[400px] max-h-[500px] bg-secondary-white  flex justify-center'>
                            { previewImage ? 
                                <img className='object-cover w-auto' src={previewImage}/> : 
                                <div className='flex items-center text-xl text-primary-black/50'>Upload Personal Art</div>
                            }
                        </div>
                        <label htmlFor='imagePersonal' className=''>
                            <div className='p-2 cursor-pointer  text-center rounded-full text-white uppercase font-normal bg-primary-red'>
                                    Upload Art
                            </div>
                            <input id='imagePersonal' onChange={uploadPersonalArt}  accept="image/*" hidden type='file'/>
                        </label>
                    </div>
                    <div className=' w-full h'>

                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                            <AppInputMap<AddArtType> fields={Fields} control={control} containerInputsClassName='gap-2 '/>
                            <Button type='submit' className='max-w-[200px] self-center my-10 rounded-full'>Upload my Art</Button>
                        </form>
                    </div>
                
                </div>

            </div>




        </div>
    )
}