import React, { Component } from 'react';
import Title from '../Title';
import Gallery from 'react-grid-gallery';
import { ProductConsumer} from '../Context/Context';

export default class ΗλεκτρικαΓκαλερι extends Component {


    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }  



    render() {

        return (
            
            <ProductConsumer>
                {value=>{

var electricalGal = value.electricalGal.map((i) => {
    i.customOverlay = (
    <div style={captionStyle}>
       <div>{i.caption}</div>
       {i.hasOwnProperty('tags') &&
           this.setCustomTags(i)}
   </div>);
return i;
});
    
return(
                        
 <div className="electric-gallery">

    <Title title="Εργα εγκααταστάσεων" width=""  />
<div className="inside-container">
<div className="electric-center" style={{
 overflow:'hidden'
}}>
        <Gallery
        images={value.electricalGal}
        enableImageSelection={false}/>
    </div>
</div>

 </div> 
 )
 }}
    </ProductConsumer>

          
        )
    }
}



const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    padding:"5px 0",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
  transition:'all 1s ease-in-out',
    fontSize: "90%",
    textAlign:"center"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};
