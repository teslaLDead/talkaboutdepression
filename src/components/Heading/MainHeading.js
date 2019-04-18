import React from 'react';

class MainHeading extends React.Component{
    render(){
        let style={color:`${this.props.color}`}
        return(
            <div className={this.props.className}>
                <h1 style={style} className="mainHeading d-flex d-column">{this.props.children}</h1>
            </div>
        )
    }
}

export default MainHeading;