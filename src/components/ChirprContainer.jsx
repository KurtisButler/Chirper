import React from 'react'

const ChirprContainer = ({username, message}) => {
    return (
        <>
            <h3>{username}</h3>
            <p>{message}</p>
        </>
    )

}

export default ChirprContainer;