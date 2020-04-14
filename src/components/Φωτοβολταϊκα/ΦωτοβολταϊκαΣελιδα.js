import React from 'react';
import "./ΦωτοβολταϊκαΣελιδα.css";
import ΕγκαταστασειςΦωτοβολταϊκων from './ΕγκαταστασειςΦωτοβολταϊκων';
import ΦωτοβολταϊκαΓκαλερι from './ΦωτοβολταϊκαΓκαλερι';
import Footer from '../Footer';


export default function ΦωτοβολταϊκαΣελιδα() {
    return (
        <div>
           <ΕγκαταστασειςΦωτοβολταϊκων /> 
           <ΦωτοβολταϊκαΓκαλερι />
           <Footer />
        </div>
    )
}
