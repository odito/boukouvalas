import React from 'react';
import ΕπαφηSection from './ΕπαφηSection';
import "./ΕπικοινωνιαΣελιδα.css";
import Χαρτης from './Χαρτης';
import Footer from '../Footer';

export default function ΕπικοινωνιαΣελιδα() {
    return (
        <div>
           <ΕπαφηSection />
           <Χαρτης />
           <Footer />
        </div>
    )
}

