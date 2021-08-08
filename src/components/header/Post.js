import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SinglePost from './SinglePost'
function Post() {

    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    const slicePost = posts.slice(0, 6)

    return (
        <div>
            {slicePost.map(pt => <SinglePost posts={pt} key={pt.id} ></SinglePost>)}
        </div>
    )
}

export default Post
