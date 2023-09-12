import withMT from '@material-tailwind/react/utils/withMT'
 
export default withMT({
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-black' : '#333',
                'primary-red' : '#E94444',
                'primary-brown' : '#B56767',
                'secondary-white' : '#E5E5E5'
            }
            
        },
    },
    plugins: [],
})