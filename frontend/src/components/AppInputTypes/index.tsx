import React from 'react'
import { fieldType } from 'types/inputFieldType'
import { Controller, Control, FieldValues , Path } from 'react-hook-form'
import { Input, Textarea } from '@material-tailwind/react'
import { twMerge } from 'tailwind-merge'


type AppInputTypeProps<T extends FieldValues> = { 
    field: fieldType;
    control: Control<T>;
}

export const AppInputTypes = <T extends FieldValues> (props: AppInputTypeProps<T>) => {

    switch (props.field.type) {
    case 'text' : 
    case  'password' : {
        return (
            <Controller
                control={props.control}
                name={props.field.name as Path<T>}
                render={({ field: { onChange, value, name }, fieldState: { error } }) => (
                    <div className={twMerge('flex-col flex ' , props.field.className)}>
                        <Input className={twMerge('w-full')}  label={props.field.label} onChange={onChange} type={props.field.type} value={value} name={name as string}  crossOrigin={undefined}  error={!!error}/>
                        {error && <span className='text-primary-red text-[11px]'>{error?.message}</span>}
                    </div>
                )}
            />
        )
    }
    case 'blank': {
        return (
            <div className='w-full lg:block hidden'></div>
        )
    }
    case 'textarea': {
        return (
            <Controller
                control={props.control}
                name={props.field.name as Path<T>}
                render={({ field: { onChange, value, name }, fieldState: { error } }) => (
                    <Textarea color='red'  className={twMerge('w-full  min-h-[100px] max-h-[300px]',props.field.className)}    label={props.field.label} onChange={onChange}  value={value} name={name as string}    error={!!error}/>
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
