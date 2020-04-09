import React, { Component } from 'react'

export default class Accordion extends Component {

 state={
     showInfo:false
 }


 handleToggle=()=>{
     this.setState({
         showInfo:!this.state.showInfo
     })
 }


    render() {
        const {acc}=this.props;
        const {showInfo}=this.state;
        
    return (
        <div className="accordion">
                                 
        
             <div className="btn-accordion"
               onClick={this.handleToggle}
                >{acc.title} <span><i className={showInfo ?'fas fa-minus':'fas fa-plus'}></i></span>
                </div>

                <div className={showInfo ? " activeParagraph paragraph ":'paragraph '}>
                    <p className="paragr">{acc.paragraph}</p>
              </div> 
        </div>
    )
    }
}
