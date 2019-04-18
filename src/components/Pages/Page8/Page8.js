import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './Page8.module.css';
import {TimelineLite} from 'gsap';

class Page8 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;

 this.paraElement=null;
        this.page6PageTween = new TimelineLite({paused:true});;
       
    }
    state={
        displaySyle:null
    }

    componentDidMount=()=>{
    
        this.props.allowAnimation();
        this.entryEventHandler();

        
        
        
       
        
        
    
        
    }
    entryEventHandler=()=>{
      
        this.page6PageTween
        .delay(0.5)
        .fromTo(this.headingElememnt,1.5,{opacity:0,y: -10},{opacity:1,y:0})

        .fromTo(this.para1,0.75,{opacity:0,y: -10},{opacity:1,y:0,delay:0.5})
        .fromTo(this.para2,0.75,{opacity:0},{opacity:1,delay:0.5})

       .play();
       this.page6PageTween.eventCallback("onComplete",this.props.allowScrollEvent);
       
    }

    componentDidUpdate=(preveProps)=>{
        if(this.props.stopAnimation!==preveProps.stopAnimation && this.props.stopAnimation){
          
            this.page6PageTween.progress(1,false);
        }
    }

   

    render(){
        return(
        <div id="page8" className={classes.page8Container}>
       
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading color="#0f222a" className={classes.mainHeading}>Help. Share. Talk.
</MainHeading>
      
    </div>
    <div ref={div => this.para1 = div} className={classes.paragraph}>
        <p>Just by starting a conversation and spreading the message you can make a big difference in the lives of many souls.</p>
    </div>
    <div ref={div => this.para2 = div}>
        <button className={classes.button} onClick={
            _=>{
                const el = document.createElement('textarea');
  el.value = window.location;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  alert('Copied the link: '+el.value)
  document.body.removeChild(el);

            }
        }>Share.</button>
    </div>
        
        
        
      
        
        
    </div>
   
   
  
    )
       
    }
}

export default Page8;