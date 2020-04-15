import React from 'react';
import './ΠιστοποιητικαΣελιδα.css';
import ΠιστοποιητικαSection from './ΠιστοποιητικαSection';
import ΕκδοσηSection from './ΕκδοσηSection';
import Footer from '../Footer';


export default function ΠιστοποιητικαΣελιδα() {
    return (
       <React.Fragment>
           <ΠιστοποιητικαSection />
           <ΕκδοσηSection />
          <Footer />
       </React.Fragment>
    )
}
