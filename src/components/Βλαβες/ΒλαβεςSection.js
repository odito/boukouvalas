import React from 'react';
import Title from '../Title';
import {ProductConsumer} from '../Context/Context';

export default function ΒλαβεςSection() {
    return (
      <ProductConsumer>
          {value=>{
              const{vlavesItems}=value;
              return(
                <section className="vlaves">
                <Title title="Βλάβες" width="80px" />
                <div className="inside-container">
                    <div className="vlaves-center">
                       <div className="intro">
                           <p>Μια ηλεκτολογική βλάβη είναι ένας απρόσκλητος επισκέπτης που μας κάνει δύσκολη τη ζωή μας.Η εμπειρία μας στην επίλυση ηλεκτρολογικών βλαβών είναι πολύ μεγάλη καθώς έχουμε όλη την τεχνογνωσία που απαιτέιται για την επίλυση ανεπιθήμιτων ηλεκτρολογηκών προβλημάτων. <b>Οι πιο συνιθησμένες ηλεκτρολογικές βλάβες που συναντάμε είναι:</b></p>
                        </div> 

                        {vlavesItems.map(item=>{
                            return(
                                <div key={item.id} className="single-vlavh">
                                <h3>{item.title}</h3>
                            <p>{item.paragraph}<b>{item.boltText}</b></p>
                            </div>
                            )
                        })}

                    </div>
                </div>
            </section>
              )
          }}
      </ProductConsumer>
    )
}
