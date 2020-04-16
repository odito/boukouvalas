import React from 'react';
import Title from '../Title';

export default function Χαρτης() {
    return (
        <div className='hartis'>
          <Title title="Χάρτης" width="70px"  />
          <div className="inside-container">
              <div className="hartis-center">
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8891.326336168237!2d23.838899278384645!3d38.01075560521903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sel!2sgr!4v1587038412655!5m2!1sel!2sgr" width="100%" height="400" frameborder="0" >

              </iframe>



              </div>
          </div>
        </div>
    )
}
