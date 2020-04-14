import React from 'react';
import './ΗλεκτρολογικαΣελιδα.css';
import HlektrikesEgatastaseis from './HlektrikesEgatastaseis';
import ΗλεκτρικαΓκαλερι from './ΗλεκτρικαΓκαλερι';
import Footer from '../Footer';

export default function Ηλεκτρολογικα_σελιδα() {
    return (
        <div>
           <HlektrikesEgatastaseis />
           <ΗλεκτρικαΓκαλερι />
           <Footer />
        </div>
    )
}
