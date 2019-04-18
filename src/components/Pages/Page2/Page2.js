import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './SecondPage.module.css';
import {TimelineLite} from 'gsap';

class Page2 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;
        this.para3=null;
        this.para4=null;
        this.imageElementBack=null;
        this.staticElement=null; this.paraElement=null;
        this.secondPageTween = new TimelineLite({paused:true});
    
    }
    state={
        displayStyle:null
    }

    componentDidMount=()=>{
       
        this.props.allowAnimation();
        this.entryEventHandler();
      
     
      
        
    }


    entryEventHandler=()=>{
        
        this.secondPageTween
        .delay(0.5)
        .fromTo(this.headingElememnt,1.5,{opacity:0,y: -10},{opacity:1,y:0})
        .fromTo(this.imageElementBack,1,{opacity:0,x:20},{opacity:0.95,x:0},'-=0.5')
        .fromTo(this.staticElement,0.75,{opacity:0,x:10},{opacity:0.90,x:0},)
        .fromTo(this.para1,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.5},'-=1')
        .fromTo(this.para2,2,{opacity:0,x: -10},{opacity:1,x:0,delay:0.75})
        .fromTo(this.para3,2,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
        .fromTo(this.para4,2,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
       .play();

        this.secondPageTween.eventCallback("onComplete",this.props.allowScrollEvent);
    }
    componentDidUpdate=(preveProps)=>{
        if(this.props.stopAnimation!==preveProps.stopAnimation && this.props.stopAnimation){
          
            this.secondPageTween.progress(1,false);
        }
    }
   

   

    render(){
        return(
        <div style={this.state.displayStyle} id="secondPage" className="pageContainer d-flex">
        <div className="leftPageSection">
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading>What is 
Depression?</MainHeading>
      
    </div>
        <div ref={div => this.para1 = div} className={classes.paragraph}>
            <p>Depression is a <mark className={classes.mark}>mental illness</mark>. It is a medical condition just like asthma or diabetes, and it is not a weakness. </p>
        </div>
        <div ref={div => this.para2 = div}  className={classes.paragraph}>
            <p>It's a serious condition that <mark className={classes.mark}>affects your physical</mark> and mental health. It significantly interferes with one's ability to work, play and love.  </p>
        </div>
        <div ref={div => this.para3 = div} className={classes.paragraph}>
            <p>Neuroscientists <mark className={classes.mark}>don't really know what causes it</mark>, but it seems to be due to a complex interaction between genes and environment.  </p>
        </div>
        <div ref={div => this.para4 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>It can happen to anyone.</mark> There is no tool to accurately predict where or when it will show up. </p>
        </div>
    </div>
    <div ref={div => this.imageElementBack = div} className={classes.rightSection}>
        <div ref={div => this.staticElement = div} className={classes.static}>
            <div className={classes.staticOverlay}></div>
        </div>

    </div>
    </div>
    )
       
    }
}

export default Page2;