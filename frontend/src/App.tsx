

import React, { useEffect } from 'react'
import {  RouterProvider  } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import { customTheme } from 'utilities/CustomTheme'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'utilities/firebase'
import { GetDocument } from 'service/firebase'
import { useSetAtom } from 'jotai'
import { authAtom } from 'store/authAtom'
import { router } from 'routes'



function App() {
    const setAuth = useSetAtom(authAtom)

    useEffect(()=>{

        const unsubscribe =  onAuthStateChanged(auth ,async (user) => {
            const userData = await GetDocument('Users',  user ? user.uid : '')
            // localStorage.setItem('token' , JSON.stringify(userData.data()))
            setAuth(userData.data())
        })
        unsubscribe()
    },[]
    )



    return  (
        <React.Fragment>
            <ThemeProvider value={customTheme}>
                <div className='text-primary-black'>
                    <RouterProvider router={router} />
                </div>
            </ThemeProvider>
        </React.Fragment>
    )
  
}

export default App

