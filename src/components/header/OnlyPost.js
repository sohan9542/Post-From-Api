import React from 'react'

const OnlyPost = (props) => {
    const {title, body} = props.pd
    return (
        <div>
            <h1>Recent Post</h1>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default OnlyPost
