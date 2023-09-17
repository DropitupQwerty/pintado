import { Button } from '@material-tailwind/react'
import { AppInputMap } from 'components/AppInputTypes/AppInputMap'
import { useAtomValue } from 'jotai'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AddDocuments, SetDocuments } from 'service/firebase'
import { UploadSingleImage } from 'service/sellerArt'
import { AddArtType } from 'service/sellerArt/schema'
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
                {label: 'Author' , type : 'text' , name:'author'},
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
                {label: 'Description' , type : 'text' , name:'description'}
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
    })
    
    
    const onSubmit = async (data : AddArtType) => {

        uploadArtOnFirebase(data)
    }






    return (    
        <div className='min-h-full'>
            <div className='text-3xl font-bold text-center p-4 '> Sell Art</div>
            <div className='container mx-auto h-full'>
                <div className=' flex gap-4 items-center h-full'>
                    <div className=' w-full'>
                        <div className='border my-2 flex justify-center'><img className='  min-h-[400px] max-h-[500px] object-cover w-auto' src={previewImage}/></div>
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