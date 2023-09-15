import { Button } from '@material-tailwind/react'
import { AppInputMap } from 'components/AppInputTypes/AppInputMap'
import React from 'react'
import { useForm } from 'react-hook-form'
import { RegisterType } from 'service/auth/schema'

export const Register = () => {
    const [personalImage, setPersonalImage] = React.useState<Blob | null>( null)
    const [previewPersonalImage , setPreviewPersonalImage] = React.useState<string>('')
    const [personalArts, setPersonalArts] = React.useState<Blob[] | null>(null)
    const [previewPersonalArts, setPreviewPersonalArts] = React.useState<string[]>([''])

    const Fields =  [
        {
            fields : [
                {label: 'Email Address' , type : 'text' , name:'email'},
                {label: 'Password' , type : 'password' , name:'password'}
            ]
        },
        {
            fields : [
                {label: 'Confirm Password' , type : 'password' , name:'confirmPassword'},
                {label: 'First Name' , type : 'text' , name:'firstname'}
            ]
        },
        {
            fields : [
                {label: 'Last Name' , type : 'text' , name:'lastname'},
                {label: 'Addrerss Line 1' , type : 'text' , name:'address1'}
            ]
        },
        {
            fields : [
                {label: 'Addrerss Line 2' , type : 'text' , name:'address2'},
                {label: 'Subsurb City' , type : 'text' , name:'suburbCity'}
            ]
        },
        {
            fields : [
                {label: 'Contry' , type : 'text' , name:'country'},
                {label: 'State/Province' , type : 'text' , name:'province'}
            ]
        },
        {
            fields : [
                {label: 'Zip/Postalcode' , type : 'text' , name:'zipCode'},
                {label: 'Phone number' , type : 'text' , name:'phoneNumber'}
            ]
        },
        
    ]


    const { handleSubmit , control } = useForm<RegisterType>({
    })
    
    
    const onSubmit = (data : RegisterType ) => {
        console.log(data)
    }


    const uploadPersonalPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0] as Blob

        e.preventDefault()
        setPersonalImage(file)
        setPreviewPersonalImage(URL.createObjectURL(file as Blob) )
        URL.revokeObjectURL(previewPersonalImage)
    }



    const uploadPersonalArt = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files
    
        if (files) {
            const filelist: string[] = []
            previewPersonalArts.forEach((url) => {
                URL.revokeObjectURL(url)
            })

            const filesArray: File[] = Array.from(files)


            for (let i = 0; i < files.length; i++) {
                const element = files[i]
                const objectURL = URL.createObjectURL(element)
                filelist.push(objectURL)
            }


            
            setPersonalArts(filesArray)
            setPreviewPersonalArts(filelist)
        }
    }


    return (
        <div>
            <div className='text-center text-3xl p-4 font-bold'>Register Seller Acount</div>
            
            <div className='flex w-full p-[2%] items-center'>
                <div className='w-1/2 flex gap-2 justify-center flex-col'>
                    <div className='text-center flex flex-col items-center'>
                        <div className='border h-[200px] w-[200px]'>
                            <img src={previewPersonalImage} className='object-cover w-full h-full'/>
                        </div>   
                        Upload Personal Photo
                        <div>
                            <label htmlFor='imagePersonal' className=''>
                                <div className='p-2 cursor-pointer border text-center rounded-full text-white uppercase font-normal bg-primary-red'>
                                    Upload Personal Image
                                </div>
                                <input id='imagePersonal' onChange={uploadPersonalPhoto}  accept="image/*" hidden type='file'/>
                            </label>
                        </div>
                    </div>
                    <div className='text-center flex flex-col items-center'>
                        <div className='flex flex-wrap border gap-2'>
                            {personalArts?.length !== 0 ? previewPersonalArts?.map((preview , index)=>
                                <img className='h-[200px] w-[200px] object-cover ' key={index} src={preview}/> 
                            )  
                                : <div className='w-full h-full'></div>
                            }
                        </div>  
                           
                        Upload 5 art Images
                        <div>
                            <label htmlFor='imageArt' className=''>
                                <div className='p-2 cursor-pointer border text-center rounded-full text-white uppercase font-normal bg-primary-red'>
                                    Upload Images
                                </div>
                                <input id='imageArt' multiple onChange={uploadPersonalArt} hidden type='file'/>
                            </label>
                        </div>
                    </div>
    
                </div>

                <div className=' flex justify-center flex-col items-center w-1/2 h-full '>
                    <div className='w-full '>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                            <AppInputMap<RegisterType> fields={Fields} control={control} containerInputsClassName='gap-2 '/>
                            <Button type='submit' className='max-w-[200px] self-center my-10 rounded-full'>Create Account</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
