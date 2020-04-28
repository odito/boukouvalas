import React from 'react';
import Title from '../Title';
import InstallationBoxes from '../InstallationBoxes';
import {ProductConsumer} from '../Context/Context';
import {Helmet} from 'react-helmet';


export default function HlektrikesEgatastaseis() {
    return (
<ProductConsumer>
    {value=>{
        const {hlektrologikaItems}=value;
    return(
        <section className="hlektrikes-egatastaseis">
        {/* <Title title="Ηλεκτρικές εγκαταστάσεις" width='' /> */}

           {/* heading seo with react helmet */}
           <div className="title">
            <h2>Ηλεκτρικές εγκαταστάσεις</h2>
            <div className="underline" ></div>
        </div>
         {/* end of heading seo with react helmet */}




        <div className="inside-container">
            <div className="sameItems-center">
               
                {/*mapping single component item */}

                    {hlektrologikaItems.map(item=>{
                        return(
                            
                     
                          <InstallationBoxes  key={item.id} item={item} />
                   
                 
                        )
                    })}

             {/* end of mapping component item */}
             
            </div>
        </div>
    
    </section> 
    )
    }}
</ProductConsumer>
    )
}
