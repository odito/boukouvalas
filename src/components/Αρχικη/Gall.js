
// import React from 'react';
// import Gallery from 'react-grid-gallery';
// import {images} from '../Context/ImgData';


// class Gall extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             images: images
//         };
//     }

//     setCustomTags (i) {
//         return (
//             i.tags.map((t) => {
//                 return (<div
//                         key={t.value}
//                         style={customTagStyle}>
//                         {t.title}
//                         </div>);
//             })
//         );
//     }



//     render () {




 

//         var images =
//                 this.state.images.map((i) => {
//                     i.customOverlay = (
//                             <div style={captionStyle}>
//                             <div>{i.caption}</div>
//                             {i.hasOwnProperty('tags') &&
//                              this.setCustomTags(i)}
//                         </div>);
//                     return i;
//                 });

                

     
//         return (
//                 <div className="gall">

             
         

//                 <Gallery
//             images={images}
//             enableImageSelection={false}/>
            
//                 </div>
//         );
//     }
// }



// const captionStyle = {
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     maxHeight: "240px",
//     padding:"5px 0",
//     position: "absolute",
//     bottom: "0",
//     width: "100%",
//     color: "white",
//   transition:'all 1s ease-in-out',
//     fontSize: "90%",
//     textAlign:"center"
// };

// const customTagStyle = {
//     wordWrap: "break-word",
//     display: "inline-block",
//     backgroundColor: "white",
//     height: "auto",
//     fontSize: "75%",
//     fontWeight: "600",
//     lineHeight: "1",
//     padding: ".2em .6em .3em",
//     borderRadius: ".25em",
//     color: "black",
//     verticalAlign: "baseline",
//     margin: "2px"
// };





// export default Gall;








// second way
import React from 'react';
import Gallery from 'react-grid-gallery';

import { ProductConsumer} from '../Context/Context';


class Gall extends React.Component {

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

    render () {

        return (
           
    <ProductConsumer>
      
        {value=>{
          console.log(value.images);
          
            var images = value.images.map((i) => {
                i.customOverlay = (
                <div style={captionStyle}>
                   <div>{i.caption}</div>
                   {i.hasOwnProperty('tags') &&
                       this.setCustomTags(i)}
               </div>);
           return i;
            });


            return(
             
                <div className="gall">


                <Gallery
            images={images}
            enableImageSelection={false}/>
            
                </div>
            )
        }}
    </ProductConsumer>

        );
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





export default Gall;