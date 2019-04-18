import React from 'react';

const Paragraph=(props)=>{
    return(
        <div>
            <p className="para">{props.children}</p>
        </div>
    )
}

export default Paragraph;