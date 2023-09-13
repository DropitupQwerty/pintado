import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'
import { useAtomValue } from 'jotai/react'
import { authAtom } from 'store/authAtom'
import { Navigate } from 'react-router-dom'

const Container = () => {
    const auth = useAtomValue(authAtom)

    if(!auth) {
        return <Navigate to="login" replace={true}/>
    }
    
    return <AppUserLayout/>

}

export default Container
