import React from 'react'
import Title from '../Title'

export default function ΕκδοσηSection() {
    return (
      <section className="ekdosh">
          <Title title="Τρόπος έκδωσης" width="160px" />
          <div className="inside-container">
            <div className="ekdosh-center">
                <div className="ekdosh-icon">
                  
                </div>
               <div className="ekdosh-texts">
               <div className="ekdosh-single">
                    <p><i className="fas fa-hand-point-right"></i> Αρχικά γίνεται έλεγχος της εγκατάστασης από ηλεκτρολόγο.</p>
                </div>

                <div className="ekdosh-single">
                    <p><i className="fas fa-hand-point-right"></i> Αν όλα είναι εντάξει,μετά Υπέυθυνη δήλωση απο ηλεκτρολογο.</p>
                </div>

                <div className="ekdosh-single">
                    <p><i className="fas fa-hand-point-right"></i> Έκθεση Παράδοσης Ηλεκτρικής Εγκατάστασης.</p>
                </div>

                <div className="ekdosh-single">
                    <p><i className="fas fa-hand-point-right"></i>  Σχέδια κάτοψης ηλεκτρικής εγκατάστασης και ηλεκτρικού πίνακα.</p>
                </div>

                <div className="ekdosh-single">
                    <p><i className="fas fa-hand-point-right"></i> Σχέδιο μονογραμμικό του ηλεκτρικού πίνακα της εγκατάστασης.</p>
                </div>
               </div>
            </div>
          </div>
      </section>
    )
}
