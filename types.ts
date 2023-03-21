import React from "react";
export type singlePost = {
    title:string,
    excerpt:string
}


export type layoutProps = {
   children: React.ReactNode
}
export type categoryType = {
    name:string,
    slug:string
}[]

export type requestType = {
    graphqlLink:string
}


export type postTypes = singlePost []