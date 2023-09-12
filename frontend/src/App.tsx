import React from 'react'
import {  RouterProvider  } from 'react-router-dom'
import { router } from 'routes'
import { ThemeProvider } from '@material-tailwind/react'
import { customTheme } from 'utilities/CustomTheme'




function App() {


    return  <React.Fragment>
        <ThemeProvider value={customTheme}>
            <div className='text-primary-black'>
                <RouterProvider router={router} />
            </div>
        </ThemeProvider>
    </React.Fragment>
  
}

export default App

