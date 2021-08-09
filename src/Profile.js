import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Spost from './Spost'
const Profile = () => {

    const [comment, setComment] = useState([])
    const [profile, setProfile] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComment(data))

        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(data => setProfile(data.data))


    }, [])




    const { id } = useParams()
    // console.log(id);
    // const comments = comment.filter(pd => pd.postId === id)
    const myProfile = profile.filter(pd => pd.id == id);
   
    const flex = {
        display: 'flex',
        alignItems: 'center',
    }
    return (
        <div>
            <div style={flex}>
                {myProfile.map(pd => <Spost pd={pd}></Spost>)}

            </div>
        </div>
    )
}

export default Profile
