import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './ThirdPage.module.css';
import {TimelineLite} from 'gsap';

class Page3 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;
        this.para3=null;
        this.imageElement=null;

 this.paraElement=null;
        this.thirdPageTween = new TimelineLite({paused:true});;
       
    }
    state={
        displaySyle:null
    }

    componentDidMount=()=>{
        console.log('third page mounted');
        this.props.allowAnimation();
        this.entryEventHandler();
        
    }
    entryEventHandler=()=>{
      
        this.thirdPageTween
        .delay(0.5)
        .fromTo(this.headingElememnt,1.5,{opacity:0,y: -10},{opacity:1,y:0})
        .fromTo(this.imageElement,0.75,{opacity:0,x: 10},{opacity:1,x:0})

        .fromTo(this.para1,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.5})
        .fromTo(this.para2,2,{opacity:0,x: -10},{opacity:1,x:0,delay:3})
        .fromTo(this.para3,2,{opacity:0,x: -10},{opacity:1,x:0,delay:3})
       .play();
       this.thirdPageTween.eventCallback("onComplete",this.props.allowScrollEvent);
       
    }
    componentDidUpdate=(preveProps)=>{
        if(this.props.stopAnimation!==preveProps.stopAnimation && this.props.stopAnimation){
          
            this.thirdPageTween.progress(1,false);
        }
    }

    render(){
        return(
        <div id="thirdPage" className="pageContainer d-flex">
        <div ref={div => this.headingElememnt = div}  className="leftPageSection">
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading color="white" className={classes.mainHeading}>Feeling
Depressed
</MainHeading>
      
    </div>
        <div ref={div => this.para1 = div} className={classes.paragraph}>
            <p>Everybody feels down sometimes. It's the <mark className={classes.mark}>most natural things</mark> that happens to all of us. Circumstances can often make us feel depressed and this feeling doesn't have a trigger. It just pops out of the blue.  </p>
        </div>
        <div ref={div => this.para2 = div}  className={classes.paragraph}>
            <p>But <mark className={classes.mark}>this feeling, it goes away.</mark> It doesn't stay for long, harassing us and exhausting our mind for long. You might feel depressed one night then suddenly the next morning everything is fine.  </p>
        </div>
        <div ref={div => this.para3 = div} className={classes.paragraph}>
            <p>
Your walk your dog, you have breakfast and you don't feel sad or lonely anymore. This <mark className={classes.mark}>feeling of being depressed</mark> just become a bad day. </p>
        </div>
        
    </div>
    <div  ref={div => this.imageElement = div} className={classes.rightPageSection}>
           <img src="./thirdPageAsset1.svg"/>
    </div>
   
    </div>
    )
       
    }
}

export default Page3;