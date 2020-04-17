import React from 'react';
import Title from '../Title';

export default function Kanones() {
    return (
        <section className="kanones">
            <Title title=" Βασικοί μας κανόνες" width="" />
            <div className="inside-container">
                <div className="kanones-center">
                    <div className="single-kanonas">
                   <span> <i class="fas fa-book"></i></span>
                    <p>Μελετη</p>
                    </div>
                    <div className="single-kanonas">
                  <span>  <i class="fas fa-thumbs-up"></i></span>
                    <p>Ασφάλεια</p>
                    </div>
                    <div className="single-kanonas">
                    <span><i class="fas fa-briefcase"></i></span>
                    <p>Εγκατάσταση</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
