import React from 'react'

import './Αρχικη.css';
import Slider from './Slider';
import Εργα from './Εργα';
import Προσφορα from './Προσφορα';

import Συνεργατες from './Συνεργατες';
import Πελατες from './Πελατες';
import Footer from '../Footer';
import {Helmet} from 'react-helmet';

export default function Αρχικη_σελιδα() {
    return (
        <div>

       
            {/* for seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Μπουκουβάλας electrical</title>
                <meta name="description" content="Η εταιρεία μας προσφέρει μια μεγάλη γκάμα ηλεκτρολογικών εγκαταστάσεων,ασθενών ρευμάτων,φωτοβολταϊκών συστημάτων,εγκαστάσεις συστημάτων ασφαλειας σε πολύ προσιτές τιμές με τα καλύτερα υλικά της αγοράς." />
                
            </Helmet>
            {/* end for seo */}


             <Slider />
              <Εργα />
             <Προσφορα />
             <Συνεργατες />
             <Πελατες />
             <Footer />
        </div>
    )
}
