import React from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <section className="footer">
         <Title title="Επικοινωνία" width="120px" />
         <div className="foot">
             <div className="inside-container">
              <div className="center-footer">
                  {/* contact footer */}
                 <div className="contact-footer">
                    <h3>Επικοινωνία</h3>

                    <div className="contact-footer-info">
                    <li>Διεύθυνση</li>
                     <p className="foot-info"><span><i className="fas fa-map-marker-alt"></i></span>Αντωνίου κιουση 47 Αθήνα</p>
                     
                     <li>Τηλεφωνο</li>
                     <p ><span><i className="far fa-envelope"></i></span>6986823910</p>
                      
                     <li>Email</li>
                     <p><span><i class="fas fa-phone-alt"></i></span>odkolas@gmail.com</p>
                    </div>
                 </div>

                 {/* contact links */}
                 <div className="contact-links">
                 <h3>Λινκς</h3>
                  <ul className="contact-links-info">
                      <li><Link to="/">Αρχική</Link></li>
                      <li><Link to="/σχετικα">Σχετικά</Link></li>
                      <li><Link to="/ηλεκτρολογικα">Ηλεκτρολογικά</Link></li>
                      <li><Link to="/φωτοβολταϊκα">Φωτοβολταϊκά</Link></li>
                      <li><Link to="/συστ_ασφαλειας">Συστ.Ασφαλείας</Link></li>
                      <li><Link to="/πιστοποιητικα">Πιστοποιητικά</Link></li>
                      <li><Link to="/βλαβες">Βλάβες</Link></li>
                      <li><Link to="/επικοινωνια">Επικοινωνία</Link></li>
                  </ul>
                 </div>

                 <div className="contact-media">
                 <h3>Κοινωνικά μέσα</h3>
                  <div className="contact-media-info">
                      <li>
                          <a href="https://www.facebook.com"><i class="fab fa-facebook-square"></i></a>

                          <a href="https://www.facebook.com"><i class="fab fa-twitter-square"></i></a>

                          <a href="https://www.facebook.com"><i class="fab fa-linkedin"></i></a>

                          <a href="https://www.facebook.com"><i class="fab fa-youtube-square"></i></a>
                          
                      </li>
                  </div>
                    
                 </div>
              </div>
             </div>
    <div className="end-footer">Designed &copy; created by Codito 2020 {new Date().getFullYear() >2020 ? `-  ${new Date().getFullYear()}`:``}</div>
         </div>
        </section>
    )
}
