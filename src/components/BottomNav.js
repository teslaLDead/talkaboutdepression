import React from 'react';

const BottomNav =(props)=>{
    let style=null;
    if(props.theme==="light")
        style={
            color:'#eaeaea'
        }
        else
        style={
            color:'#191919'
        }
    return(
        <div style={style}>
            <span><a href="">Skip</a></span><span><a href="">Share</a></span><span><a href="">Get Help</a></span>
        </div>
    )
}

export default BottomNav;