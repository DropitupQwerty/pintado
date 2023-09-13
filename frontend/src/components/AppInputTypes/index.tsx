import React from 'react'
import { fieldType } from 'types/inputFieldType'
import { Controller, Control, FieldValues , Path } from 'react-hook-form'
import { Input } from '@material-tailwind/react'
import { twMerge } from 'tailwind-merge'


type AppInputTypeProps<T extends FieldValues> = { 
    field: fieldType;
    control: Control<T>;
}

export const AppInputTypes = <T extends FieldValues> (props: AppInputTypeProps<T>) => {

    switch (props.field.type) {
    case 'text': {
        return (
            <Controller
                control={props.control}
                name={props.field.name as Path<T>}
                render={({ field: { onChange, value, name }, fieldState: { error } }) => (
                    <Input className={twMerge('w-full ',props.field.className)}  label={props.field.label} onChange={onChange} value={value} name={name as string}  crossOrigin={undefined}  error={!!error}/>
                )}
            />
        )
    }
    case 'password': {
        return (
            <Controller
                control={props.control}
                name={props.field.name as Path<T>}
                render={({ field: { onChange, value, name }, fieldState: { error } }) => (
                    <Input className={twMerge('w-full  ',props.field.className)}    label={props.field.label} onChange={onChange} type='password' value={value} name={name as string}  crossOrigin={undefined}  error={!!error}/>
                )}
            />
        )
    }
    default: {
        return (
            <div className='text-red-700 text-[12px] min-w-[200px] text-center h-full flex items-center justify-center' > Text Input Not Available</div>
        )
    }
    }
}
