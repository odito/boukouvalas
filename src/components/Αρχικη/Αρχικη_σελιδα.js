import React from 'react'

import './Αρχικη.css';
import Slider from './Slider';
import Εργα from './Εργα';
import Προσφορα from './Προσφορα';

import Συνεργατες from './Συνεργατες';
import Πελατες from './Πελατες';
import Footer from '../Footer';


export default function Αρχικη_σελιδα() {
    return (
        <div>
             <Slider />
              <Εργα />
             <Προσφορα />
             <Συνεργατες />
             <Πελατες />
             <Footer />
        </div>
    )
}
