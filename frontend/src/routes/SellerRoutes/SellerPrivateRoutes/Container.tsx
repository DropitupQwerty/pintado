import { AppSellerLayout } from 'components/AppSellerLayout'
import { useAtomValue } from 'jotai'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { authAtom } from 'store/authAtom'

export const Container = () => {
    const auth = useAtomValue(authAtom)

    if(auth?.userType === 'seller') {
        return  <AppSellerLayout/>
    }
    return <Navigate to="/"/> 
}
