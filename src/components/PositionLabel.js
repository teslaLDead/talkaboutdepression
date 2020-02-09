import React from "react";
import './Pointer.css';

const PositionLabel = (props) => {
    const {
        
        
        position: {
            x = 0,
            y = 0
        } = {}
    } = props;

    return (
        
            
            <span id="mousePointer" style={{left:`${x}px`,top:`${y}px`}}></span>
        
    );
};

PositionLabel.defaultProps = {
    shouldShowIsActive: true
};

export default PositionLabel;