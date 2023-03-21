import React, {useEffect, useState} from 'react'
import { layoutProps } from '../types'
import { getPost } from '../utils/getPost'
import Header from './Header'



export default function Layout({children}:layoutProps) {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getPost()
    //       if(data){
    //     console.log("this is the data",data)
    //       }
    //     }
    //     fetchData()
    //     }, [])
  return (
    <>
        <Header />
        {children}
    </>
  )
}
