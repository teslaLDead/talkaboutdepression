import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './FourthPage.module.css';
import {TimelineLite} from 'gsap';

class Page4 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;
        this.para3=null;
        this.para4=null;
        this.imageElement=null;
        

 this.paraElement=null;
        this.fourthPageTween = new TimelineLite({paused:true});;
       
    }
    state={
        displaySyle:null
    }

    componentDidMount=()=>{
        console.log('FOURTH page mounted');
        this.props.allowAnimation();
        this.entryEventHandler();
    }
    entryEventHandler=()=>{
      
        this.fourthPageTween
        .delay(0.5)
        .fromTo(this.headingElememnt,1,{opacity:0,y: -10},{opacity:1,y:0})
        .fromTo(this.imageElement,1,{opacity:0,x: 20},{opacity:1,x:0})
        .fromTo(this.para1,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.5})
        .fromTo(this.para2,2,{opacity:0,x: -10},{opacity:1,x:0,delay:2})
        .fromTo(this.para3,2,{opacity:0,x: -10},{opacity:1,x:0,delay:2})
        .fromTo(this.para4,2,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
       .play();
       this.fourthPageTween.eventCallback("onComplete",this.props.allowScrollEvent);
       
    }

    componentDidUpdate=(preveProps)=>{
        if(this.props.stopAnimation!==preveProps.stopAnimation && this.props.stopAnimation){
          
            this.fourthPageTween.progress(1,false);
        }
    }


    render(){
        return(
        <div id="fourthPage" className="pageContainer d-flex">
        <div ref={div => this.headingElememnt = div}  className="leftPageSection">
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading color="white" className={classes.mainHeading}>Actual Depression

</MainHeading>
      
    </div>
        <div ref={div => this.para1 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>Actual depression doesn't just goes away.</mark> It stays with you for more than a period of 2-3 weeks. An average depression period can last for about 4-6 months. </p>
        </div>
        <div ref={div => this.para2 = div}  className={classes.paragraph}>
            <p>In many cases,depression requires <mark className={classes.mark}> medical diagnosis and treatment.</mark> In severe cases, depression leads to suicidal thought, where you feel like your life is worthless.
 </p>
        </div>
        <div ref={div => this.para3 = div} className={classes.paragraph}>
            <p>
            <mark className={classes.mark}>Every day, every night this feeling remains with you.</mark>  </p>
        </div>
        <div ref={div => this.para4 = div} className={classes.paragraph}>
            <p>
            <mark className={classes.mark}>Avoid comparing</mark> the feeling of being depressed sometimes with actual cases of depression, since depression can be medically diagnosed and its a serious mental issue. </p>
        </div>
        
    </div>
    <div ref={div => this.imageElement = div} className={classes.rightPageSection}>
           <img src="./farmer-alone depressed.svg"/>
    </div>
   
    </div>
    )
       
    }
}

export default Page4;