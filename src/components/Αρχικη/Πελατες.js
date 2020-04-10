import React from 'react';
import Title from '../Title';
import Testimonial from './Testimonial';


export default function Πελατες() {
    return (
       <section className="pelates">
           <Title title="Απόψεις πελατών" width="170px" />
           <div className="inside-container">
               <div className="pelates-center">
                   <Testimonial />
               </div>
           </div>
       </section>
    )
}
