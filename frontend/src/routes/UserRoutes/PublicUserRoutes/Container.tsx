import { AppUserLayout } from 'components/AppUserLayout'
import { useAtomValue } from 'jotai'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { authAtom } from 'store/authAtom'

const Container = () => {
    const auth = useAtomValue(authAtom)

    switch(auth?.userType){
    case 'admin': {
        return <Navigate to="admin"/>
    }
    case 'seller': {
        return <Navigate to="seller"/>
    }
    case 'user' : {
        return <Navigate to="/"/>
    }
    default : {
        return <AppUserLayout/>
    }

    }


}

export default Container
