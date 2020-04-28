import React from 'react'
import"./ΒλαβεςΣελιδα.css";
import ΒλαβεςSection from './ΒλαβεςSection';
import ΕπιλυσηGallery from './ΕπιλυσηGallery';
import Footer from '../Footer';
import {Helmet} from 'react-helmet';

export default function ΒλαβεςΣελιδα() {
    return (
        <div>

        
            {/* for seo */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ηλεκτρολογικές βλάβες</title>
                <meta name="description" content="Η εμπειρίας μας στον τομέα της ανεύρεσης βλαβών είναι μεγάλη και για αυτό οι πελάτες μας, μας εμπιστεύονται την εγκατάσταση τους. " />
                
            </Helmet>
            {/* end for seo */}

           <ΒλαβεςSection />
           <ΕπιλυσηGallery />
           <Footer />
        </div>
    )
}
