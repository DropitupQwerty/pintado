import withMT from '@material-tailwind/react/utils/withMT'
 
export default withMT({
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-white' : '#fff',
                'secondary-white' : '#E5E5E5',
                'primary-black' : '#333',
                'primary-red' : '#E94444',
                'secondary-red' : '#FAC0BF',
                'primary-brown' : '#B56767',
            }
            
        },
    },
    plugins: [],
})