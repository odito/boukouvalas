import React, { Component } from 'react'
import Title from '../Title';



export default class ΕπαφηSection extends Component {

 


    render() {
        
        
        return (
           <section className="epikoinonia">
            <Title title="Επικοινωνία" width="120px" />
             <div className="inside-container">
              <div className="epikoinonia-center">
              <div className="epikoinonia-tab">
                 <h3>Θέμης Μπουκουβάλας</h3>
                 <div className="epikoinoniaTab-info">
                     <li><i class="fas fa-phone-alt"></i>210 6021965 - 6986823910</li>
                     <li><i class="far fa-envelope"></i>odkolas@gmail.com</li>
                     <li><i class="fas fa-map-marker-alt"></i>Αντ κιουση 47 κορωπι</li>
                 </div>
                 </div>
  
                 <div className="epikoinonia-form">
                   <form  action="https://formspree.io/mknnpyob" method="POST" >
                      
                      <div className="inputs">
                      <div className="single">
                           <label htmlFor="Ονομα">Ονομα</label>
                           <div><input type="text" 
                            name="Ονομα"
                           className="name" placeholder="Ονομα..." /></div>
                       </div>

                       <div className="single">
                           <label htmlFor="Επίθετο">Επίθετο</label>
                           <div><input type="text" className="lastname" 
                           placeholder="Επίθετο..." 
                           name="Επίθετο"
                            /></div>
                       </div>

                       <div className="single">
                           <label htmlFor="Τηλέφωνο">Τηλέφωνο</label>
                           <div><input type="number" className="tel" 
                          
                           placeholder='τηλέφωνο'
                           name="Τηλέφωνο"
                           /></div>
                       </div>
                       <div className="single">
                           <label htmlFor="email">Email</label>
                           <div><input type="email" className="email" 
                          
                            placeholder="email..."
                            name="email"
                            /></div>
                       </div>
                      </div>

                       <div className="textarea">
                          <textarea name="" id="" cols="30" rows="8" placeholder="Μηνυμα..." 
                         
                          name="Μηνυμα"
                          >

                          </textarea>
                       </div>
                        <div className="msg">Το μήνυμα στάλθηκε</div>
                       <div className="buttonForm">
                           <button className="btn-basic " >Αποστολή</button>
                       </div>

                   </form>
                 </div>
              </div>
             </div>
           </section>
        )
    }
}
