import React from 'react'

const Comments = (props) => {
    const { body } = props.comment;
    const style = {
        border: '1px solid white',
        padding: '8px',
        borderRadius: '5px'
    }
    return (
        <div>
            <p style={style}>{body}</p>

        </div>
    )
}

export default Comments
