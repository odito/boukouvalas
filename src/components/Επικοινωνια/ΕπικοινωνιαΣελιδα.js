import React from 'react';
import ΕπαφηSection from './ΕπαφηSection';
import "./ΕπικοινωνιαΣελιδα.css";
import Χαρτης from './Χαρτης';
import Footer from '../Footer';
import {Helmet} from 'react-helmet';

export default function ΕπικοινωνιαΣελιδα() {
    return (
        <div>

            
            {/* for seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Επικοινωνία</title>
                <meta name="description" content="Για οποιοδήποτε πρόβλημα ηλεκτρολογικής φύσεως, μπορείτε να επικοινωνίσετε μαζί μέσω email ή τηλεφώνου  " />
                
            </Helmet>
            {/* end for seo */}


           <ΕπαφηSection />
           <Χαρτης />
           <Footer />
        </div>
    )
}

