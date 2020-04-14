import React from 'react';
import "./ΣυστΑσφαλειαςΣελιδα.css";
import ΣυστΕγκαταστασεις from './ΣυστΕγκαταστασεις';
import ΣυστηματαΓκαλερι from './ΣυστηματαΓκαλερι';
import Footer from '../Footer';

export default function ΣυστΑσφαλειαςΣελιδα() {
    return (
        <div>
           <ΣυστΕγκαταστασεις />
           <ΣυστηματαΓκαλερι />
           <Footer />
        </div>
    )
}
