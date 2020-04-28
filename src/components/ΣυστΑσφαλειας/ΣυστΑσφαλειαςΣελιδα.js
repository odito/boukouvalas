import React from 'react';
import "./ΣυστΑσφαλειαςΣελιδα.css";
import ΣυστΕγκαταστασεις from './ΣυστΕγκαταστασεις';
import ΣυστηματαΓκαλερι from './ΣυστηματαΓκαλερι';
import Footer from '../Footer';
import {Helmet} from 'react-helmet';

export default function ΣυστΑσφαλειαςΣελιδα() {
    return (
        <div>

            {/* for seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Συστήματα ασφαλείας</title>
                <meta name="description" content="Η εμπειρίας μας στα συστήματα ασφαλείας είναι μεγάλη. Η εταιρεία μας προσφέρει εγκαταστάσεις συναγερμού,πυρανίχνευσης,κάμερας,θυροτηλεόρασης,δικτύων σε προσιτές τιμές." />
                
            </Helmet>
            {/* end for seo */}


           <ΣυστΕγκαταστασεις />
           <ΣυστηματαΓκαλερι />
           <Footer />
        </div>
    )
}
