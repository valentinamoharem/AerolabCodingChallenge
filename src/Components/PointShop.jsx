import React, { useState } from 'react'
import '../Styles/PointShop.css'

const PointShop = props => {
    
    const [selected, setSelected] = useState(0)

    const optionArr = [1000, 5000, 7500]

    return (
        <div className="black-space" >
            <div className="shop-modal">
                <div className="shop-modal-selector">
                    <p>Select the amount of points:</p>
                    <div className="point-selector">
                        <p className={`shop-option ${selected === 0 && "selected"}`} onClick={() => setSelected(0)}>1000</p>
                        <p className={`shop-option ${selected === 1 && "selected"}`} onClick={() => setSelected(1)}>5000</p>
                        <p className={`shop-option ${selected === 2 && "selected"}`} onClick={() => setSelected(2)}>7500</p>
                    </div>
                </div>
                <div className="shop-modal-balance">
                    <div className="balance">
                        <h5>Your balance:</h5>
                        <p>{`Your points.... ${props.points}`}</p>
                        <p>{`Your order..... ${optionArr[selected]}`}</p>
                        <p>{`Total points... ${props.points + optionArr[selected]}`}</p>
                    </div>
                    <div className="buttons">
                        <button className="cancel" onClick={() => props.togglePointShop()}>Cancel</button>
                        <button className="confirm" onClick={() => props.addPoints(optionArr[selected])}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PointShop
