import React from 'react';
import "./ΦωτοβολταϊκαΣελιδα.css";
import ΕγκαταστασειςΦωτοβολταϊκων from './ΕγκαταστασειςΦωτοβολταϊκων';
import ΦωτοβολταϊκαΓκαλερι from './ΦωτοβολταϊκαΓκαλερι';
import Footer from '../Footer';
import{Helmet} from 'react-helmet';


export default function ΦωτοβολταϊκαΣελιδα() {
    return (
        <div>

              {/* for seo */}
              <Helmet>
                <meta charSet="utf-8" />
                <title>Φωτοβολταϊκά συστήματα</title>
                <meta name="description" content="Η εταιρεία μας έχει μεγάλη εμπειρία στα φωτοβολταϊκα συστήματα και αποτελείται από έμπειρους ηλεκτρολόγους μηχανικούς.Αναλαμβάνουμε εγκαταστάσεις αυτόνομων συστημάτων με μπαταρίες και διασυνδεδεμένα με την ΔΕΗ." />
                
            </Helmet>
            {/* end for seo */}


           <ΕγκαταστασειςΦωτοβολταϊκων /> 
           <ΦωτοβολταϊκαΓκαλερι />
           <Footer />
        </div>
    )
}
