import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../header/SinglePost.css';
import Comments from './Comments';
import Picture from './Picture';
const SinglePost = (props) => {
    const { body, id, title, userId } = props.posts
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

    const comments = comment.filter(pd => pd.postId === id)
    const myProfile = profile.filter(pd=> pd.id === id)
    // console.log(myProfile);
    let history = useHistory()
    function sendUrl(id) {
        history.push(`/friend/${id}`)
    }
    return (
        <div className='postContainer'>
            <div className="singlePost">
                <div className="posts">
                   {myProfile.map(pd=> <Picture information={pd}></Picture>)}
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <button className="btn btn-success" onClick={()=> sendUrl(id)}>See Profile</button>
                </div>
                <div className="comments">
                    <h2>Public Comments</h2>
                    {comments.map(pd => <Comments comment={pd}></Comments>)}
                </div>
            </div>

        </div>
    );
};

export default SinglePost;