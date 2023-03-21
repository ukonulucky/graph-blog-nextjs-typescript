import {useEffect, useState} from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Categories from '../components/Categories'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import { postTypes } from '../types'
import { getPost } from "../utils/getPost"



const block:postTypes = [{
  title: "React with tailwind",
  excerpt:"Learn Reeact with tailwind"
}]


const Home: NextPage = () => {
  useEffect(() => {
    console.log("code ran")
  const fetchData = async () => {
  await getPost()
  }
  fetchData()
  }, [])
  return (
    <div className="container mx-auto px-10 mb-8">
    <Head>
      <title>Lucky Blog</title>
    </Head>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
         <div className='lg:col-span-8 col-span-1'>
  {
    block.map((i,j) => <PostCard post={i} />)
  }
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
         </div>
         <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8 bg-gray-600'>
          <PostWidget />
           <Categories />
          
          </div>

         </div>
    </div>
    </div>
  )
}

export default Home


export async function getServerSideProps(){
  // console.log("coming from index",process.env.NEXT_PUBLIC_GRAPHQL_END_POINT)
      return {
        props: {
          text: "hellow word"
        }
      }
}