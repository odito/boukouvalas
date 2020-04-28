import React from 'react';
import './ΠιστοποιητικαΣελιδα.css';
import ΠιστοποιητικαSection from './ΠιστοποιητικαSection';
import ΕκδοσηSection from './ΕκδοσηSection';
import Footer from '../Footer';
import {Helmet} from 'react-helmet';


export default function ΠιστοποιητικαΣελιδα() {
    return (
       <React.Fragment>
      
          
            {/* for seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Πιστοποιητικά ΔΕΗ</title>
                <meta name="description" content="Αναλαμβάνουμε την έκδωση πιστοποιητικών ΔΕΗ για κάθε ηλεκτρολογική εγκατάσταση σε προσιτές τιμές" />
                
            </Helmet>
            {/* end for seo */}

           <ΠιστοποιητικαSection />
           <ΕκδοσηSection />
          <Footer />
       </React.Fragment>
    )
}
