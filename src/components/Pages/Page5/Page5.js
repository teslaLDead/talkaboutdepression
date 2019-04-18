import React from 'react';
import MainHeading from '../../Heading/MainHeading';
import classes from './FifthPage.module.css';
import {TimelineLite} from 'gsap';

class Page5 extends React.Component{

    constructor(props){
        super(props);
        this.headingElememnt=null;
        this.para1=null;
        this.para2=null;
        this.para3=null;
        this.para4=null;
        this.para5=null;
        this.para6=null;
        this.para7=null;
        this.para8=null;
        this.imageEl1=null;
        this.imageEl2=null;
        this.imageEl3=null;

 this.paraElement=null;
        this.fifthPageTween = new TimelineLite({paused:true});
      
       
    }
    state={
        displaySyle:null
    }

    componentDidMount=()=>{
      
        this.props.allowAnimation();
        this.entryEventHandler();

        
        
        
       
        
        
    
        
    }

    
    entryEventHandler=()=>{

       
      
        this.fifthPageTween
        .delay(0.5)
        .fromTo(this.headingElememnt,1.3,{opacity:0,y: -10},{opacity:1,y:0})
        .to(this.imageEl1,1,{opacity:1,x: -10},'=-1')
        .fromTo(this.para1,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.5})
        
      
        .fromTo(this.para2,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
      
        .fromTo(this.para3,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
        .to(this.imageEl1,1,{opacity:0,x: 20})
        .to(this.imageEl2,1,{opacity:1,x: -10})
        
        .fromTo(this.para4,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1},'=-1.5')
     
        .fromTo(this.para5,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1.5})
        .to(this.imageEl2,1,{opacity:0,x: 10})
        .to(this.imageEl3,1,{opacity:1,x: -10})
       
      
        .fromTo(this.para6,1,{opacity:0,x: -10},{opacity:1,x:0,delay:0.25},'=-2')
        
        
        .fromTo(this.para7,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
        
      
        .fromTo(this.para8,1,{opacity:0,x: -10},{opacity:1,x:0,delay:1})
       .play();
       this.fifthPageTween.eventCallback("onComplete",this.props.allowScrollEvent);
       
    }

    componentDidUpdate=(preveProps)=>{
        if(this.props.stopAnimation!==preveProps.stopAnimation && this.props.stopAnimation){
          
            this.fifthPageTween.progress(1,false);
        }
    }
   

    render(){
        return(
        <div id="fifthPage" className="pageContainer d-flex">
        <div ref={div => this.headingElememnt = div}  className="leftPageSection">
        <div  ref={div => this.headingElememnt = div} className={classes.headingContainer}>
            <MainHeading color="white" className={classes.mainHeading}>The 
            Symptoms

</MainHeading>
      
    </div>
        <div ref={div => this.para1 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>Loss of interest in things that you normally enjoy. </mark></p>
        </div>
        <div ref={div => this.para2 = div}  className={classes.paragraph}>
            <p><mark className={classes.mark}>Changes in appetite.
 </mark></p>
        </div>
        <div ref={div => this.para3 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>
           Feeling worthless. </mark></p>
        </div>
        <div ref={div => this.para4 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>
            Insomnia or Hypersomnia. </mark></p>
        </div>
        <div ref={div => this.para5 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>
            Social withdrawl. </mark></p>
        </div>
        <div ref={div => this.para6 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>
            Poor concentration.  </mark></p>
        </div>
        <div ref={div => this.para7 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>
            Slowness and loss of energy. </mark></p>
        </div>
        <div ref={div => this.para8 = div} className={classes.paragraph}>
            <p><mark className={classes.mark}>
            Thoughts of Suicide.
 </mark></p>
        </div>
        
    </div>
    <div  className={classes.rightPageSection}>
           <img ref={img => this.imageEl1 = img} src="./5thAsset3.svg" alt="guy alone in mountains"/>
           <img ref={img => this.imageEl2 = img} src="./5thAsset1.svg" alt="girl sleeping alone "/>
           <img ref={img => this.imageEl3 = img} src="./5thAsset2.svg " alt="girl not able to concentrate "/>
    </div>
   
    </div>
    )
       
    }
}

export default Page5;