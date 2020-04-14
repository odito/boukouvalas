import React from 'react'
import Title from '../Title';
import InstallationBoxes from '../InstallationBoxes';
import {ProductConsumer} from '../Context/Context';

export default function ΣυστΕγκαταστασεις() {
    return (
        <ProductConsumer>
    {value=>{
        const {sustimataItems}=value;
    return(
        <section className="sistimata-asfaleias">
        <Title title="Συστήματα ασφαλείας" width='250px' />
        <div className="inside-container">
            <div className="sameItems-center">
               
                {/*mapping single component item */}

                    {sustimataItems.map(item=>{
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
