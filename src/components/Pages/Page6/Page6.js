import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './Page6.module.css';
import {TimelineLite} from 'gsap';

class Page6 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;
        this.para3=null;
        this.para4=null;
        this.para5=null;
        this.imgEl=null;
       

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
        .fromTo(this.imgEl,1,{opacity:0,x: 10},{opacity:1,x:-10})
        .fromTo(this.para1,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.5})
        .fromTo(this.para2,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
        .fromTo(this.para3,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
        .fromTo(this.para4,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
        .fromTo(this.para5,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
      
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
        <div id="page6Page" className="pageContainer d-flex">
        <div ref={div => this.headingElememnt = div}  className="leftPageSection">
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading color="white" className={classes.mainHeading}>Show Me
Numbers
</MainHeading>
      
    </div>
        <div ref={div => this.para1 = div} className={classes.paragraph}>
        <h3>300 million people</h3>
           <p>around the world have depression, according to the WHO.</p>
        </div>
        <div ref={div => this.para2 = div}  className={classes.paragraph}>
        <h3>32.5 years old</h3>
           <p>is the median age of depression onset. </p>
        </div>
        <div ref={div => this.para3 = div} className={classes.paragraph}>
        <h3>37 %</h3>
           <p>of adults with depression receive no treatment at all. </p>
        </div>
        <div ref={div => this.para4 = div} className={classes.paragraph}>
        <h3>More women are affected </h3>
           <p>by depression than men. </p>
        </div>
        <div ref={div => this.para5 = div} className={classes.paragraph}>
        <h3>48 - 50 % </h3>
           <p>of the economic costs are attributed to decreased productivity caused by depression</p>
        </div>
        
        
    </div>
    <div ref={div => this.imgEl = div} className={classes.rightPageSection}>
           <img src="./statsImage.svg" alt="rotating globe showing stats"/>
    </div>
   
    </div>
    )
       
    }
}

export default Page6;