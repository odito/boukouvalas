import React, { Component } from 'react';
import Title from '../Title';
import Accordion from './Accordion';

export default class Προσφορα extends Component {

state={
    offers:[

        {
            title:'Υπευθυνότητα',
            paragraph:'Από την στιγμή που θα αναλαβουμε το εργο,είμαστε υπεύθυνοι για την σωστη εγκατάσταση του,και αυτός είναι ο πρώτοε μας στόχος. ',
           
        },
        {
            title:'Ασφάλεια',
            paragraph:'Ο πιο σημαντικός παράγοντας που λαμβάνουμε υπόψην κατά την εγκατάσταση είναι η ασφάλεια της. '
           
        },
        {
            title:'Αξιοπιστία',
            paragraph:'lorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random word',
          
        },
        {
            title:'Αμεση υποστίριξη',
            paragraph:'lorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random word',
        },
        {
            title:'Συμβουλές',
            paragraph:'lorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random word',
        },
        {
            title:'Ποιότητα υλικών',
            paragraph:'lorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random wordlorem ipsum is a random word',
        }
        
        ],

}



    render() {
       
        return (
            <div className="prosfora">
                <Title title="Τι προσφερουμε" width="150px" />
                <div className="back-img" style={{
                 background:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,3)) , url('/images/cars.jpg') center/cover no-repeat`
    
    
                }}>
                   <div className="inside-container cont">
                   <div className="prosfora-center">
                       <div className="accord">
                         
                           
                        {this.state.offers.map((acc,index)=>{
                            return(
                               <Accordion acc={acc} key={index} info={this.state.info}  />
                            )
                        })}

                       </div>
    
                   </div>
                </div> 
                </div>
            </div>
        )
    }
}
