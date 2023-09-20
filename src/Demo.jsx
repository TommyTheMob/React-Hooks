import React, {useState} from "react";
import Dimensions from './Dimensions.jsx'
import './demo.scss'

const Demo = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="content">
            <div className="btns">
                <button className="btn" onClick={() => setIsVisible(true)}>
                    Show
                </button>
                <button className="btn" onClick={() => setIsVisible(false)}>
                    Hide
                </button>
            </div>
            {isVisible && <Dimensions />}
        </div>
    )
}

export default Demo