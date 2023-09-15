import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'
import { useAtomValue } from 'jotai/react'
import { authAtom } from 'store/authAtom'
import { Navigate } from 'react-router-dom'

const Container = () => {
    const auth = useAtomValue(authAtom)

    if(auth?.userType ==='user' || auth?.userType === 'seller') {
        return <AppUserLayout/>
    }
    return <Navigate to="login" />
    

}

export default Container
