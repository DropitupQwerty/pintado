import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'

const Container = () => {
    const userToken = localStorage.getItem('token') 

    if(userToken){
        return <AppUserLayout/>
    } 


}

export default Container
