import React from 'react'
import './FeatureBox.css'
import { BsArrowRight } from 'react-icons/bs'
function FeatureBox({ title, src, des }) {
    return (
        <div className='FeatureBox'>
            <div className="FeatureBox-picture">
                <img src={src} alt="" />
            </div>
            <div className="FeatureBox-texts">
                <h2>{title}</h2>
                <p>{des}</p>
                <button>see more<BsArrowRight /></button>
            </div>
        </div>
    )
}

export default FeatureBox