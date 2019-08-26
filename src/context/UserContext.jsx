import React, { Component, createContext } from 'react'
import Axios from 'axios'

export const UserContext = createContext()

export default class UserContextProvider extends Component {
    state = {
        username: 'Jane Doe',
        points: 0,
        redeemHistory: [],
        isBuyingPoints: false
    }

    setPoints = (n) => {
        this.setState({...this.state, points: n})
    }
    setUsername = (str) => {
        this.setState({...this.state, username: str})
    }
    
    addPoints = (points) => {
        console.log(points)
        Axios.post('https://coding-challenge-api.aerolab.co/user/points', {
            data: {
                'amount': points
            },
            header: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRkYmQ0ODM0OGU2OTAwNmM3NTg4ZjMiLCJpYXQiOjE1NjUzNzU4MTd9.P6YXbYbssMG1JVFj1D7ZYa0gG1V0W8jDWg_mEaNDxVE'
            }
        })
        .then(() => {
            this.setPoints(this.state.points + points)
        })
        .catch(err => console.error(err))
    }

    togglePointShop = () => {
        this.setState({...this.state, isBuyingPoints: !this.state.isBuyingPoints})
        document.body.classList.toggle('no-scroll')
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
        console.log(`Toggled, now showing? ${this.state.isBuyingPoints}`)
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, setPoints: this.setPoints, setUsername: this.setUsername, addPoints: this.addPoints, togglePointShop: this.togglePointShop}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
