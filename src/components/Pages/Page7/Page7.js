import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './Page7.module.css';
import {TimelineLite} from 'gsap';

class Page7 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;
    
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
        console.log('page7 page mounted');
        this.props.allowAnimation();
        this.entryEventHandler();

        
        
        
       
        
        
    
        
    }
    entryEventHandler=()=>{
      
        this.page6PageTween
        .delay(0.75)
        .fromTo(this.headingElememnt,1.5,{opacity:0,y: -10},{opacity:1,y:0})
        .fromTo(this.imgEl,1,{opacity:0,x: 10},{opacity:1,x:-10})

        .fromTo(this.para1,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.5})
        .fromTo(this.para2,1,{opacity:0,x: -10},{opacity:1,x:0,delay:2})

        .fromTo(this.para4,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1.5})
        .fromTo(this.para5,1,{opacity:0,x: -10},{opacity:1,x:0,delay:2})
      
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
        <div id="page7" className="pageContainer d-flex">
        <div ref={div => this.headingElememnt = div}  className="leftPageSection">
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading color="#0f222a" className={classes.mainHeading}>So How Do
We Treat It?
</MainHeading>
      
    </div>
        <div ref={div => this.para1 = div} className={classes.paragraph}>
       
           <p>Fortunately, <mark className={classes.mark}>depression like any disease is treatable</mark>. In some cases, it can be dealt with pretty easily. Medication and therapy both are present.</p>
        </div>
        <div ref={div => this.para2 = div}  className={classes.paragraph}>
    
           <p><mark className={classes.mark}>Talking about depression or thoughts of suicide</mark> can help someone deal with depression. Most people suffering from depression might not be open about it, so talk to them.
 </p>
        </div>
       
        <div ref={div => this.para4 = div} className={classes.paragraph}>
  
           <p>Other treatments include <mark className={classes.mark}>interpersonal psychotherapy,</mark> where patients talk with psychologists and get help from a professional. 
 </p>
        </div>
        <div ref={div => this.para5 = div} className={classes.paragraph}>

           <p><mark className={classes.mark}>Open conversations</mark> about mental illness can help erode stigma and make it easier for people to ask for help.</p>
        </div>
        
        
    </div>
    <div  ref={div => this.imgEl = div} className={classes.rightPageSection}>
           <img src="./treatDepression.svg"/>
    </div>
   
    </div>
    )
       
    }
}

export default Page7;