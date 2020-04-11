import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';


export default class ItemSlider extends Component {


  render() {

    return (

        
      <Carousel
      
        // arrowLeft={<Icon className="icon-example" name="arrow-left" />}
        animationSpeed={1500}
        autoPlay={4000}
        offset={0}
        infinite
        arrowLeft={<FaChevronLeft className="icon-example" name="arrow-left" />}
      arrowRight={<FaChevronRight className="icon-example" name="arrow-right" />}
      addArrowClickHandler

    //    responsive below
    breakpoints={{
       
        500: {
            slidesPerPage: 2,
            slidesPerScroll: 3,
            width:100
          },
       
       
        1000: { // these props will be applied when screen width is less than 1000px
            slidesPerPage: 4,
            slidesPerScroll: 5,
            
           
        },
        1400: { // these props will be applied when screen width is less than 1000px
            slidesPerPage: 6,
            slidesPerScroll: 6,
            
           
        },
     
      }}
        
      
      >
         
             
          <div className="single-img-item">
          <img src="./images/itemsCarousel/item1.jpg" alt="img" />
          </div>

          <div className="single-img-item">
          <img src="./images/itemsCarousel/item1.jpg" alt="img" />
          </div>

          <div className="single-img-item">
          <img src="./images/itemsCarousel/item1.jpg" alt="img" />
          </div>
        
       
       
      </Carousel>
     
    );
  }
}
