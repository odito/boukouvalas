import React from 'react';
import Title from '../Title';
import Gall from './Gall';
import {Link} from 'react-router-dom';

export default function Εργα() {
    return (
        <React.Fragment>
            
         <section className="erga-egatastaseon">

          <Title title="Εργα εγκαταστάσεων" width="" />
          
       

         <div className="inside-container">
           
           <div className="erga-center">
              <div className="erga-shetika">
               <div className="shetika-icons">
                  <p >Σχετικα</p>
                 <span><i className="fas fa-users"></i></span>
               </div>
                <div className="shetika-texts">
                 <p> Το ok electric ειναι μια εταιρεια με μεγαλη εμπειρια στον τομεα των εγκατασστασεων.Αποτελειται απο επαγγελματιες με μεγαλη εμπειρια.
                  Οι υπηρεσιες μας :</p>
                 <ol>
                 <li>1.<Link to='/ηλεκτρολογικα'>Ηλεκτρικες εγκταστασεις</Link></li>
                  <li>2.<Link to="/φωτοβολταϊκα">Φωτοβολταϊκα συστιματα</Link></li>
                  <li>3.<Link to="/συστ_ασφαλειας">Συστηματα ασφαλειας</Link></li>
                  <li>4.<Link to="/πιστοποιητικα">Πιστοποιητικα</Link></li>
                  <li>5.<Link to="/βλαβες">Βλαβες</Link></li>
                 
                  </ol> 
                </div>
                 <div className="perissotera">
                <Link to='/σχετικα'>
                   <button className="btn-basic">περισσοτερα...</button>
               </Link>
               </div>
              </div>


              <div className="erga-gallery" style={{
                 overflow:'hidden'
                
              }}>
         
               <Gall />
              </div>
           </div>
           </div>
         </section>

        </React.Fragment>
    )
}
