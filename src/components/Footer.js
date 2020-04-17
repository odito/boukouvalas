import React from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context/Context';

export default function Footer() {

    return (

        <ProductConsumer>
          {value=>{
               const {Links,SubLinks}=value;
        return(
        <section className="footer">
        <Title title="Επικοινωνία" width="" />
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
                    <p><span><i className="fas fa-phone-alt"></i></span>odkolas@gmail.com</p>
                    </div>
                </div>

                {/* contact links */}
                <div className="contact-links">
                <h3>Λινκς</h3>
                    <ul className="contact-links-info">

                     {/* links menu dinamicly*/}
                     {
                    Links.map((Links=>{
                    return  <li key={Links.id}><Link to={Links.path} >{Links.link}</Link></li>
                    }))
                   }

                {/* sublinks menu dinamicly*/}
                {SubLinks.map((SubLinks=>{
                    return <li key={SubLinks.id}><Link to={SubLinks.subPath}>{SubLinks.subMenuLink}</Link></li>
                }))}

                <li><Link to="/επικοινωνια">Επικοινωνία</Link></li> 
                    </ul>
                </div>

                <div className="contact-media">
                <h3>Κοινωνικά μέσα</h3>
                    <div className="contact-media-info">
                        <li>
                            <a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i></a>

                            <a href="https://www.facebook.com"><i className="fab fa-twitter-square"></i></a>

                            <a href="https://www.facebook.com"><i className="fab fa-linkedin"></i></a>

                            <a href="https://www.facebook.com"><i className="fab fa-youtube-square"></i></a>
                            
                        </li>
                    </div>
                    
                </div>
                </div>
            </div>
    <div className="end-footer">Designed &copy; created by Codito 2020 {new Date().getFullYear() >2020 ? `-  ${new Date().getFullYear()}`:``}</div>
        </div>
        </section>
        )
          }}
        </ProductConsumer>
     
    )
}
