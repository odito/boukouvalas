import React, {Component} from 'react';
import {Links} from './Data';
import {SubLinks} from './Data';
import {images} from './ImgData';
import {ipiresies} from './Data';



const ProductContext = React.createContext();

 class ProductProvider extends Component{

   state={

     Links:Links,
     SubLinks:SubLinks,
     isOpen:false,
     open:true,
     headerShow:false,
     images:[],
     electricalGal:[],
     ipiresies:ipiresies,
     
    
      
   }


   componentDidMount(){
    window.addEventListener("scroll",this.scrollEffect);
   
    // function for taking images
    this.setProducts(images);

}


setProducts(images){
    
let basicImages=images.map(item=>{
    
        return item;
    })

let electricalGal = basicImages.filter(item=>item.category==="ena")
    




this.setState({

    images:basicImages,
    electricalGal:electricalGal,
 
  })


 

}



// --------for navbar--------

handleToggle=()=>{
    this.setState({
        isOpen:!this.state.isOpen
    });
}

closeLink=(pen)=>{
   this.setState({
       isOpen:false,
       open:false
   })

//    in order to close the submenu menu after @media width of 664px
//    setTimeout(() => {
//     this.setState({
//       open:true  
//     })
//    }, 1000);

}

// for submenu links
closeSub=()=>{
    this.setState({
       open:!this.state.open
  })
}



// scroll effect
scrollEffect = ()=>{

  if(window.scrollY >0 ){
    this.setState({
        headerShow:true
    })
  }

  else {
      this.setState({
          headerShow:false
      })
  }
    
}

// unmount or disable it in order not to keep space in memory of react
componentWillUnmount(){
    window.addEventListener("scroll",this.scrollEffect);  
}


// -------end of navbar--------





    render(){
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleToggle:this.handleToggle,
            closeLink:this.closeLink,
            closeSub:this.closeSub,

           
        }}>
           {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};