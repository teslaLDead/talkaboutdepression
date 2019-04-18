import React, { Component } from 'react';
import PageNavigation from './components/PageNavigation/PageNavigation';
import './App.css';
import Page1 from './components/Pages/Page1/Page1';
import Page2 from './components/Pages/Page2/Page2';
import Page3 from './components/Pages/Page3/Page3';
import Page4 from './components/Pages/Page4/Page4';
import Page5 from './components/Pages/Page5/Page5';
import Page6 from './components/Pages/Page6/Page6';
import Page7 from './components/Pages/Page7/Page7';
import Page8 from './components/Pages/Page8/Page8';


class App extends Component {
  constructor(props){
    super(props);
    this.customPointer=null;
  }
  state={
    pageNumber:1,
    // pageVisit:{
    //   page0:false,
    //   page1:false
    // },
 
    allowScroll:false,
    allowPageChange:false,
    showNav:false,
    stopAnimation:false

  }

  
  
  allowScrollEvent=()=>{
    this.setState({
      allowScroll:true
    })
  }

  allowPageChangeHandler=()=>{
    this.setState({
      allowPageChange:true
    })
  }

  
  navClickEventHandler=(pg)=>{
    console.log('trying to change pag number to '+pg);
    this.setState({
      pageNumber:pg,
      allowScroll:false
    })
  };


  mouseWheelHandler=(e)=>{
    if(this.state.allowScroll )
    {if(e.deltaY>0 && this.state.pageNumber<8)
    {
       //when scroll is Down
       this.setState((state)=>({
        pageNumber:++state.pageNumber,
        allowScroll:false,
        allowPageChange:false
       }));
      
    }
    else if(e.deltaY<0 && this.state.pageNumber>1)
    {
      //when scroll is UP
      this.setState((state,props)=>({
        pageNumber:--state.pageNumber,
        allowScroll:false,
        allowPageChange:false
      }));
    }}
  
  }

  allowAnimation=()=>{
    this.setState({
      stopAnimation:false
    })
  }



  skipAnimation=(e)=>{

    this.setState({
      stopAnimation:true
    })
  }

 
  render() {
    let theme=null;
    let overlayBackColor=null;
    let navStyle=null;
    let page=null;
    let bottomNavStyle=null;
   
   

      overlayBackColor=null;
      
      
    navStyle={
      opacity:'0',
      transform:'translateX(-60px)'
    }

    bottomNavStyle={
      color:'#eaeaea'
    }
      
    if(this.state.pageNumber>1)
    navStyle={
      opacity:'1',
      transform:'translateX(0px)'
    }
    switch (this.state.pageNumber) {
      case 1:
      overlayBackColor={
        background:'rgba(0, 0, 0, 0.85)'
      }
      page=<Page1 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent} />
      
        break;
      case 2:
      overlayBackColor={
        background:'rgba(255, 255, 255, 0.85)'
      }
      theme="light";
      page= <Page2 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
    
    break;
    case 3:
      overlayBackColor={
        background:'rgba(255,0 ,0 , 0.85)'
      }
      theme="dark";
      page= <Page3 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
    
      break;
      case 4:
      overlayBackColor={
        background:'rgba(0,0 ,0 , 0.85)'
      }
      theme="dark";
      page= <Page4 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
      

    break;
    case 5:
      overlayBackColor={
        background:'rgba(18,99 ,177 , 0.85)'
      }
      theme="dark";
      page= <Page5 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
      

    break;
    case 6:
      overlayBackColor={
        background:'rgba(23, 169, 93, 0.9)'
      }
      theme="dark";
      page= <Page6 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
      

    break;
    case 7:
      overlayBackColor={
        background:'rgba(255, 242, 0, 0.86)'
      }
      theme="light";
      page= <Page7  stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
      

    break;
    case 8:
      overlayBackColor={
        background:'rgba(255, 255, 255, 1)'
      }
      theme="light";
      page= <Page8 stopAnimation={this.state.stopAnimation} allowAnimation={this.allowAnimation}  allowScrollEvent={this.allowScrollEvent}/>
      

    break;

    default:

      
        
    }
    if(theme==='dark')
    bottomNavStyle={
      color:'#eaeaea'
    }
    else{
      bottomNavStyle={
        color:'#191919'
      }
    }
 
  
  
   

    return (
      <div className="App" onWheel={this.mouseWheelHandler} >
 
       <div style={overlayBackColor} className="overlayBack">
        <PageNavigation stopAnimation={this.skipAnimation} theme={theme} navClickEventHandler={this.navClickEventHandler} style={navStyle} allowScroll={this.state.allowScroll} pageNumber={this.state.pageNumber}/>
        {page}
       
        
        
        
        <div style={bottomNavStyle} className="rightBottomNav">
          <span className="skipButton" onClick={this.skipAnimation}>Skip</span>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
