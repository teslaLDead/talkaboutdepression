import React from 'react';
import classes from './PageNavigation.module.css';
import ScrollIndication from '../ScrollIndication/ScrollIndication';
import classNames from 'classnames';
class PageNavigation extends React.Component{




    render(){

        let linkColorStyle=null;
        let scrollIndication=null;
      
        const link1Classes=classNames({
                'darkNav':this.props.theme==='dark'
            ,
            
                'lighNav':this.props.theme==='light'
            ,
            
                'activeLinkLight': this.props.pageNumber===1 && this.props.theme==='light',

                'activeLinkDark':this.props.pageNumber===1 && this.props.theme==='dark'
            }
        );
        const link2Classes=classNames(
            {
             'darkNav':this.props.theme==='dark'
            ,
            
                'lighNav':this.props.theme==='light'
            ,
            
                'activeLinkLight': this.props.pageNumber===2 && this.props.theme==='light',
                
                'activeLinkDark':this.props.pageNumber===2 && this.props.theme==='dark'
            }
        );
        const link3Classes=classNames(
            {
                'darkNav':this.props.theme==='dark'
                ,
                
                    'lighNav':this.props.theme==='light'
                ,
                
                    'activeLinkLight': this.props.pageNumber===3 && this.props.theme==='light',
                    
                    'activeLinkDark':this.props.pageNumber===3 && this.props.theme==='dark'
            }
        );
        const link4Classes=classNames(
            {
                'darkNav':this.props.theme==='dark'
                ,
                
                    'lighNav':this.props.theme==='light'
                ,
                
                    'activeLinkLight': this.props.pageNumber===4 && this.props.theme==='light',
                    
                    'activeLinkDark':this.props.pageNumber===4 && this.props.theme==='dark'
            }
        );
        const link5Classes=classNames(
            {
                'darkNav':this.props.theme==='dark'
                ,
                
                    'lighNav':this.props.theme==='light'
                ,
                
                    'activeLinkLight': this.props.pageNumber===5 && this.props.theme==='light',
                    
                    'activeLinkDark':this.props.pageNumber===5 && this.props.theme==='dark'
            }
        );
        const link6Classes=classNames(
            {
                'darkNav':this.props.theme==='dark'
                ,
                
                    'lighNav':this.props.theme==='light'
                ,
                
                    'activeLinkLight': this.props.pageNumber===6 && this.props.theme==='light',
                    
                    'activeLinkDark':this.props.pageNumber===6 && this.props.theme==='dark'
            }
        );
        const link7Classes=classNames(
            {
                'darkNav':this.props.theme==='dark'
                ,
                
                    'lighNav':this.props.theme==='light'
                ,
                
                    'activeLinkLight': this.props.pageNumber===7 && this.props.theme==='light',
                    
                    'activeLinkDark':this.props.pageNumber===7 && this.props.theme==='dark'
            }
        );
        const link8Classes=classNames(
            {
                'darkNav':this.props.theme==='dark'
                ,
                
                    'lighNav':this.props.theme==='light'
                ,
                
                    'activeLinkLight': this.props.pageNumber===8 && this.props.theme==='light',
                    
                    'activeLinkDark':this.props.pageNumber===8 && this.props.theme==='dark'
            }
        );
        if(this.props.allowScroll){
        scrollIndication={
            transform:'translateX(0)'
        };}
        else{
            scrollIndication={
            transform:'translateX(-70px)'
        };}

        

        return(
            <div style={this.props.style} className={classes.leftBar}>
               <div className={classes.pageNavContainer}>
                   <div id="navContainer" className={classes.pageNavs}>
                       <div className={(classes.pageLinks)}>
                           <p  className={link1Classes}  onClick={()=>{this.props.navClickEventHandler(1);this.props.stopAnimation()}}>1</p>
                       </div>
                       <div className={(classes.pageLinks)}>
                           <p className={link2Classes}  onClick={()=>{this.props.navClickEventHandler(2);this.props.stopAnimation()}}>2</p>
                       </div>
                       <div className={classes.pageLinks}>
                           <p className={link3Classes}  onClick={()=>{this.props.navClickEventHandler(3);this.props.stopAnimation()}}>3</p>
                       </div>

                       <div className={classes.pageLinks}>
                           <p  className={link4Classes} onClick={()=>{this.props.navClickEventHandler(4);this.props.stopAnimation()}}>4</p>
                       </div>
                       <div className={classes.pageLinks}>
                           <p className={link5Classes} onClick={()=>{this.props.navClickEventHandler(5);this.props.stopAnimation()}}>5</p>
                       </div>
                       <div className={classes.pageLinks}>
                           <p className={link6Classes}  onClick={()=>{this.props.navClickEventHandler(6);this.props.stopAnimation()}}>6</p>
                       </div>
                       <div className={classes.pageLinks}>
                           <p className={link7Classes}  onClick={()=>{this.props.navClickEventHandler(7);this.props.stopAnimation()}}>7</p>
                       </div>
                       <div className={classes.pageLinks}>
                           <p className={link8Classes}  onClick={()=>{this.props.navClickEventHandler(8);this.props.stopAnimation()}}>8</p>
                       </div>
                   </div>
               </div>
               
                    <ScrollIndication style={scrollIndication} theme={this.props.theme} tilted={true}/>
              
            </div>
        )
    }
}

export default PageNavigation;