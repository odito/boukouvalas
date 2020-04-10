import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';



export default function Testimonial() {
    return (
        <div>
             <Carousel
      
      // arrowLeft={<Icon className="icon-example" name="arrow-left" />}
      animationSpeed={500}
      autoPlay={15000}
      offset={0}
      infinite
      arrowLeft={<FaChevronLeft className="icon-example" name="arrow-left" />}
    arrowRight={<FaChevronRight className="icon-example" name="arrow-right" />}
    addArrowClickHandler

  //    responsive below
  breakpoints={{
     
      500: {
          slidesPerPage: 1,
          slidesPerScroll: 1,
          width:100
        },
     
     
      1000: { // these props will be applied when screen width is less than 1000px
          slidesPerPage: 2,
          slidesPerScroll: 1,
          
         
      },
      1400: { // these props will be applied when screen width is less than 1000px
          slidesPerPage: 2,
          slidesPerScroll: 1,
          
         
      },
   
    }}
      
    
    >
       
           {/* single testimmonial */}
        <div className="single-customer">
           <div className="logo-customer">
               <img src="./images/testimonial/user1.png" alt=""/>
               <div className="single-customer-info">
                   <h3>Νικος Αλεξίου</h3>
                   <div className="star-icons">
                   <span ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                   </div>
                   
                   
                   <p><span><i className="fas fa-quote-left"></i></span> Ψαχναμε καιρό άτομο γι α την ανακαινηση των ηλεκτρολογικών μας στην διώροφη κατοικία μας.Ο Οδυσσέας μας έκανε πολύ καλή δουλειά χωρίς πολλά μερεμέτια .Σιγουρα θα τον ξαναπάρουμε σε περίπτωση που χρειαστουμε κάτι. Συνισταται με κλειστά μάτια.</p>


               </div>
           </div>
        </div>
      {/* end of single testimonial */}

         {/* single testimmonial */}
         <div className="single-customer">
           <div className="logo-customer">
               <img src="./images/testimonial/user2.png" alt=""/>
               <div className="single-customer-info">
                   <h3>Κατερίνα Νιάρχου</h3>
                   <div className="star-icons">
                   <span ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                   </div>
                   
                   
                   <p><span><i className="fas fa-quote-left"></i></span> Είχαμε πρόβλημα με τον θερμοσίφωνα,καθώς δεν ζέσταινε το νέρο.Ο κύριος Οδυσσέας ήρθε στην ώρα του και πορότι έβρεχε έκανε την δουλειά του και πλέον έχουμε ζεστό νερό.Τι να πω είναι επαγγελματίας και καλός άνθρωπος.</p>


               </div>
           </div>
        </div>
      {/* end of single testimonial */}

        {/* single testimmonial */}
        <div className="single-customer">
           <div className="logo-customer">
               <img src="./images/testimonial/user1.png" alt=""/>
               <div className="single-customer-info">
                   <h3>Γιώργος Μπέλος</h3>
                   <div className="star-icons">
                   <span ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                   </div>
                   
                   
                   <p><span><i className="fas fa-quote-left"></i></span> Θέλαμε καιρό να αλλάξουμε τον παλιό μας πινακα.Ο Οδυσσέας έκανε εξαιρετική δουλειά και σίγουρα θα τον ξαναπάρουμε για οτιδήποτε επιπλέον χρειαστεί να κάνουμε στο σπίτι μας.Συνίσταται με κλειστά μάτια.</p>


               </div>
           </div>
        </div>
      {/* end of single testimonial */}

       {/* single testimmonial */}
       <div className="single-customer">
           <div className="logo-customer">
               <img src="./images/testimonial/user2.png" alt=""/>
               <div className="single-customer-info">
                   <h3>Χρύσα Αντωνίου</h3>
                   <div className="star-icons">
                   <span ><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                   </div>
                   
                   
                   <p><span><i className="fas fa-quote-left"></i></span> Ψάχναμε καιρο άτομο για την ανακαινηση των ηλεκτρολογικών στην διώροφη κατοικία μας.Ο οδυσσέας μας έκανε πολύ καλή προσφορά και εξαιρετική δουλειά χωρίς μερεμέτια και διάφορα προβλήματα.Μπράβω στην εταιρέια του.</p>


               </div>
           </div>
        </div>
      {/* end of single testimonial */}
        

     
    </Carousel> 
        </div>
    )
}
