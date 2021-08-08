import React from 'react'

const Picture = (props) => {
    const { first_name, avatar, last_name } = props.information
    const flex = {
        display: 'flex',
        alignItems: 'center',
    }
    return (

        <div style={flex}>
            <img style={{ width: '80px', marginRight: '20px'}} src={avatar} alt="" />
            <h4>@{first_name}{last_name}</h4>
        </div>
    )
}

export default Picture
