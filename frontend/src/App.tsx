import React from 'react'
import {  RouterProvider  } from 'react-router-dom'
import { router } from 'routes'
import { ThemeProvider } from '@material-tailwind/react'
import { customTheme } from 'utilities/CustomTheme'




function App() {


    return  <React.Fragment>
        <ThemeProvider value={customTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.Fragment>
  
}

export default App

