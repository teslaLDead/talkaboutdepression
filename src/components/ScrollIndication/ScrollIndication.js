import React from 'react';

class ScrollIndication extends React.Component{
    

  
render(){
    
    const rectStyle={
        fill:'white'
        
    }
    const paraStyle={
        color:'white'
    }
    if(this.props.theme==='light'){
        rectStyle.fill="#8a8a8a";
        paraStyle.color="#303030";
    }
   

    if(this.props.tilted){
        paraStyle.transform="rotateZ(-90deg)"
    }
    
    return(
    <div style={this.props.style} className="scrollIndicator"> 
        <p style={paraStyle}>Scroll</p>
    <div className="scrollAnimationContainer" >
        
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.75 32.5" >

<g ><g ><rect style={rectStyle}width="2.75" height="60px"/></g></g></svg>
    </div>
    </div>
)}
}

export default ScrollIndication;