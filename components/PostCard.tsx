import React from 'react'
import { singlePost } from '../types'



type postProps = {
    post: singlePost
}
function PostCard({post}:postProps) {
  return (
    <div>
        <li>{post.title}</li>
        <li>{post.excerpt}</li>
    </div>
  )
}

export default PostCard