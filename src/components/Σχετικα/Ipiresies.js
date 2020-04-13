import React from 'react';
import Title from '../Title';
import {ProductConsumer} from '../Context/Context';

export default function Ipiresies() {
    return (
      <ProductConsumer>
        {value=>{
          const{ipiresies} = value;
          return(
            <section className="ipiresies">
            <Title title=" Ολες οι υπηρεσίες μας" width="220px" />
          <div className="inside-container">
            <div className="ipiresies-center">
        
            {/* mapping the ipiresies */}
              {ipiresies.map(item=>{
                return <div key={item.id} className="ipiresies-single">
                <p><span><i class="fas fa-check"></i></span>{item.title}</p>
              </div>
              })}
              {/* end of mapping the ipiresies */}
             
            </div>
          </div>
          </section>

          )
        }}
        
      </ProductConsumer>
      
    )
}
