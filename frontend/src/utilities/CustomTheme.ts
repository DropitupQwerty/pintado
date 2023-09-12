import type { ButtonStyleTypes } from '@material-tailwind/react'
import type { InputStylesType } from '@material-tailwind/react'


const buttonTheme: ButtonStyleTypes = {
    defaultProps: {
        variant: 'filled',
        size: 'md',
        color: 'red',
        fullWidth: false,
        ripple: true,
        className: '',
    },
    styles: {

        variants: {
            filled: {
                red: {
                    backgroud: 'bg-primary-red',
                    color: 'text-white',
                    shadow: 'shadow-md shadow-red-500/20',
                    hover: 'hover:shadow-lg hover:shadow-red-500/40',
                    focus: 'focus:opacity-[0.85] focus:shadow-none',
                    active: 'active:opacity-[0.85] active:shadow-none',
                }
            }
        }
    }
}


const InputTheme: InputStylesType = {
    defaultProps: {
        variant: 'outlined',
        size: 'md',
        color: 'red',
        label: '',
        error: false,
        success: false,
        icon: undefined,
        labelProps: undefined,
        containerProps: undefined,
        shrink: false,
        className: '',
    },
}


export const customTheme = {
    input: InputTheme,
    button: buttonTheme
}