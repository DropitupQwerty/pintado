import { AppUserLayout } from 'components/AppUserLayout'
import React from 'react'
import {  Navigate } from 'react-router-dom'

const Container = () => {


    const userToken = localStorage.getItem('token') 

    if(userToken){
        return  <Navigate to="/"/>
    } 
    
    return <AppUserLayout/>


}

export default Container
