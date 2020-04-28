import React from 'react'
import ΣχετικαΜεΕμας from './ΣχετικαΜεΕμας';  
import './ΣχετικάΣελιδα.css';
import Ipiresies from './Ipiresies';
import Kanones from './Kanones';
import Footer from '../Footer';
import {Helmet} from 'react-helmet';

export default function Σχετικα() {
    return (
        <div>
      
         
            {/* for seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Σχετικά με εμάς</title>
                <meta name="description" content="Η εμπειρίας μας δραστηριοποιήτε στης ηλεκτρολογικές εγκαταστάσεις, φωτοβολταϊκά συστήματα, συστήματα ασφαλείας, ασθενή ρεύματα εγκαταστάσεις δυκτίων για πολλά χρόνια, προσφέροντας το καλύτερο αποτέλεσμα." />
                
            </Helmet>
            {/* end for seo */}


            <ΣχετικαΜεΕμας />
            <Ipiresies />
            <Kanones />
            <Footer /> 
            
        </div>
    )
}
