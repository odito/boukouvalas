import React from 'react';
import Title from '../Title';
import ItemSlider from './ItemSlider';

export default function Συνεργατες() {
    return (
       <section className="sinergates">
         <Title title="Συνεργάτες μας" width="150px" />
         <div className="inside-container">
             <div className="sinergates-center">
               <div className="logo-slider">
                <ItemSlider />
                </div>  
             </div>
         </div>
       </section>
    )
}
