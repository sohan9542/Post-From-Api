import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import OnlyPost from './components/header/OnlyPost';
const Spost = (props) => {
    const { first_name, avatar, last_name, email } = props.pd;
    const [posts, setPost] = useState([])

    const style = {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center'

    }
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const { id } = useParams()

    const slicePost = posts.slice(0, 6)
    const myPost = slicePost.filter(pd => pd.id == id)

    return (
        <div style={style}>
            <div className="profile" style={{ width: '60%' }}>
                <img style={{ width: '200px' }} src={avatar} alt="" />
                <h2>{first_name} {last_name}</h2>
                <h5>{email}</h5>
            </div>
            <div className="latest_post">
                {myPost.map(pd => <OnlyPost pd={pd}></OnlyPost>)}
            </div>
        </div>
    )
}

export default Spost
