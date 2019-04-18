import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import ScrollIndication from '../../ScrollIndication/ScrollIndication';
import {TimelineLite} from 'gsap';

class Page1 extends React.Component{

    

    constructor(props){
        super(props);
        this.headingElementSpan1=null;
        this.headingElementSpan2=null;
        this.headingElementSpan3=null;
        this.scrollElement=null;
        this.firstPageTimeLine = null;
        this.myTween = new TimelineLite({paused:true});;
    }
    state={
        displayStyle:null
    }

    componentDidMount=()=>{
      
        this.props.allowAnimation();
        this.entryEventHandler();

    }

    entryEventHandler=()=>{
        
       
        this.myTween
        .delay(1)
        .fromTo(this.headingElementSpan1,1,{opacity:0,y: -10},{opacity:1,y:0})
    
        .fromTo(this.headingElementSpan2,2,{opacity:0,y: -10},{opacity:1,y: 0})
        .fromTo(this.headingElementSpan3,2.5,{opacity:0},{opacity:1})
   
        .fromTo(this.scrollElement,0.5,{opacity:0},{opacity:0.7}).play();
        this.myTween.eventCallback("onComplete",this.props.allowScrollEvent);
     
    }

    exitEventHandler=()=>{
        this.myTween
        
        .fromTo(this.headingElementSpan1,1,{opacity:1,y: -10},{opacity:0,y:0})
        .delay(3)
        .fromTo(this.headingElementSpan2,2,{opacity:1,y: -10},{opacity:0,y: 0})
        .fromTo(this.headingElementSpan3,1,{opacity:1},{opacity:0})
        .fromTo(this.scrollElement,1,{opacity:1},{opacity:0}).play();
       

    }
    componentDidUpdate=(preveProps)=>{
        if(this.props.stopAnimation!==preveProps.stopAnimation && this.props.stopAnimation){
          
            this.myTween.progress(1,false);
        }
    }
   

 

    
    render(){
      
      
        return(        
        <div style={this.state.displayStyle} id="firstPage" className="pageContainer">
            <div className="d-flex justify-center h-90 f-align-center" ><MainHeading color="white" ><span ref={span => this.headingElementSpan1 = span}>Lets talk</span> <span ref={span => this.headingElementSpan2 = span}>about</span> <span ref={span => this.headingElementSpan3 = span} className="highlight-white">depression.</span></MainHeading></div>
       
       <div ref={div => this.scrollElement = div} className="d-flex justify-center">
    
       <ScrollIndication  />
       
       
       </div>
        </div>)
    }
}

export default Page1;