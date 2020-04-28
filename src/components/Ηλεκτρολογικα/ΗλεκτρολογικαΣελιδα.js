import React from 'react';
import './ΗλεκτρολογικαΣελιδα.css';
import HlektrikesEgatastaseis from './HlektrikesEgatastaseis';
import ΗλεκτρικαΓκαλερι from './ΗλεκτρικαΓκαλερι';
import Footer from '../Footer';
import {Helmet} from "react-helmet";

export default function Ηλεκτρολογικα_σελιδα() {
    return (
        <div>
           {/* for seo */}
             <Helmet>
                <meta charSet="utf-8" />
                <title>Ηλεκτρικές εγκαταστάσεις</title>
                <meta name="description" content="Η εταιρεία μας αποτελείτε απο επαγγελματίες ηλεκτρολόγους με μεγάλη εμπειρία στον τομέα των ηλεκτρικών εγκαταστάσεων.Αναλαμβάνουμε δίαφορες μικρές ή μεγάλες ηλεκτρολογικές εγκαταστάσεις." />

            </Helmet>
            {/* end for seo */}
           
           <HlektrikesEgatastaseis />
           <ΗλεκτρικαΓκαλερι />
           <Footer />
        </div>
    )
}
