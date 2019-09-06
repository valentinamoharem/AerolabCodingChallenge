import React, { useState } from 'react'
import '../Styles/PointShop.css'

import coin from '../Static/icons/coin.svg'

const PointShop = props => {
    
    const [selected, setSelected] = useState(0)

    const optionArr = [1000, 5000, 7500]

    return (
        <div className="black-space" >
            <div className="shop-modal">
                <div className="row-1">
                    <div className="shop-modal-selector">
                        <p>Select amount:</p>
                        <div className="point-selector">
                            <div className={`shop-option first ${selected === 0 && "selected"}`} onClick={() => setSelected(0)}>1000 <img className='coin' src={coin} alt="coin"/></div>
                            <div className={`shop-option ${selected === 1 && "selected"}`} onClick={() => setSelected(1)}>5000 <img className='coin' src={coin} alt="coin"/></div>
                            <div className={`shop-option ${selected === 2 && "selected"}`} onClick={() => setSelected(2)}>7500 <img className='coin' src={coin} alt="coin"/></div>
                        </div>
                    </div>
                    <div className="shop-modal-balance">
                        <p className="YP-text">Your points:</p>
                        <div className="balance">
                            <p>{`${props.points}`}</p>
                            <img className='coin' src={coin} alt="coin"/>
                        </div>
                        <p className="PO-text">Purchasing:</p>
                        <div className="balance">
                            <p>{`${optionArr[selected]}`}</p>
                            <img className='coin' src={coin} alt="coin"/>
                        </div>
                        <p className="TP-text">Total points:</p>
                        <div className="balance">
                            <p>{`${props.points + optionArr[selected]}`}</p>
                            <img className='coin' src={coin} alt="coin"/>
                        </div>
                    </div>
                </div>
                <div className="row-2">
                        <button className="cancel" onClick={() => props.togglePointShop()}>Cancel</button>
                        <button className="confirm" onClick={() => props.addPoints(optionArr[selected])}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default PointShop
