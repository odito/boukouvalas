import React from 'react';
import Title from '../Title';

export default function ΠιστοποιητικαSection() {
    return (
        <section className="pistopoihtika">
        <Title title="Πιστοποιητικά" width="150px" />
        <div className="inside-container">
        <div className="pistopoihtika-center">
          <div className="pistopoihtika-img">
            <img src="./images/Πιστοποιητικα/Δεη.png" alt="Πιστοποιητικά"/>
          </div>
          <div className="pistopoihtika-texts">
              <p><b>Το πιστοποητικό της ΔΕΗ</b> είναι απαραίττητο έγγραφο που αποδυκνείη την σωστή λειτουργία της ηλεκτρολογικής μας εγκατάστασης. Χωρίς αυτην την προσκόμηση, η δεη δεν μας συνδέει στο δύκτιο της. Η πιστοποίηση αυτή πρέπει να βγαίνει από αδειούχο επαγγελματία ηλεκτρολόγο και πρέπει να λαμβάνεται σοβαρά υπόψην. Ο ηλεκτρολόγος που την υπογράφει πιστοποιεί ύστερα από έλεγχο, την ορθή λειτουργία της εγκατάστασης.</p>
          </div>
        </div>
        </div>
      </section>
    )
}
