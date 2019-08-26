import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import coin from '../Static/icons/coin.svg'
import '../Styles/UserData.css'

const UserData = (props) => {
    const [username, setUserName] = useState('')
    const [points, setPoints] = useState(0)
   

    useEffect(() => {
        Axios.get('https://coding-challenge-api.aerolab.co/user/me', {
            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRkYmQ0ODM0OGU2OTAwNmM3NTg4ZjMiLCJpYXQiOjE1NjUzNzU4MTd9.P6YXbYbssMG1JVFj1D7ZYa0gG1V0W8jDWg_mEaNDxVE'
            }
        })
        .then(res => {
            props.setUsername(res.data.name)
            props.setPoints(res.data.points)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className='user-data'>
            <p className='user-name'>{props.username}</p>
            <div className='user-coins' onClick={ () => { props.togglePointShop() }}>
                <p className='coins-amount'>{props.points}</p>
                <img className='coin' src={coin} alt="coin"/>
            </div>
        </div>
        
    )
}

export default UserData