

export type fieldType = {
    label: string
    name:string
    type:string
    as?:string
    option?: string[]
    rows?: number
    className?:string
    placeholder?:string
    disabled?:boolean
    specialization?:string,
}


export type InputFieldType = { 
    fields : fieldType[]
    header?: string
}