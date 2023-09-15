import { AppAdminLayout } from 'components/AppAdminLayout'
import { useAtomValue } from 'jotai'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { authAtom } from 'store/authAtom'

export const Container = () => {
    const auth = useAtomValue(authAtom)

    if(auth?.userType === 'admin'){
        return <AppAdminLayout/>
    }

    return <Navigate to="/"/>
}
