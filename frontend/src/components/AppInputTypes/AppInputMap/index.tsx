import { AppInputTypes } from 'components/AppInputTypes'
import React from 'react'
import { Control , FieldValues } from 'react-hook-form'
import { InputFieldType } from 'types/inputFieldType'
import { twMerge } from 'tailwind-merge'

type AppInputMapProps <T extends FieldValues> = {
fields :InputFieldType[]
control : Control<T>
containerClassName?: string
containerFieldClassName?: string
containerInputsClassName?: string
}


export const AppInputMap =<T extends object> (props : AppInputMapProps<T>) => {
    return (
        <div className={twMerge(props.containerClassName)} >
            {props.fields.map((F, index)=> 
                <div key={index} className={twMerge(' flex ' , props.containerFieldClassName)}>
                    {F.fields.map((f,index)=>
                        <div className={twMerge('w-full p-2' , props.containerInputsClassName)} key={index}>
                            <AppInputTypes<T>  field={f} control={props.control}/>
                        </div>
                    )}
                </div>)}
        </div>
    )
}
