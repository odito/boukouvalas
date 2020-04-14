import React from 'react';
import Title from '../Title';
import InstallationBoxes from '../InstallationBoxes';
import {ProductConsumer} from '../Context/Context';


export default function HlektrikesEgatastaseis() {
    return (
<ProductConsumer>
    {value=>{
        const {hlektrologikaItems}=value;
    return(
        <section className="hlektrikes-egatastaseis">
        <Title title="Ηλεκτρικές εγκαταστάσεις" width='250px' />
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
