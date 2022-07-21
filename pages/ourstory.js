import React from 'react';
import Head from 'next/head';

import Link from 'next/link';
import Image from 'next/image';



const Ourstory = () => {
    return (
        
        <div className="layout">
        <Head>
          <title>PHILIP STORE | OUR STORY</title>
        </Head>


       <div className= "products-heading">
        <h1>Our Story</h1>
     
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <br></br>
        <br></br>
        
        <hr></hr>
        
        <br></br> 
        <br></br>

        <div className="ourStory-image">

        <Image src='/posts/img1.jpg' width="250px" height="250px" />
         
        <Image src='/posts/img2.jpg' width="250px" height="250px" />

        </div>

        <br></br>
        <br></br>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam maximus, neque a bibendum hendrerit, mauris leo luctus ante, quis sagittis sapien quam in urna. Mauris bibendum commodo nisi, egestas facilisis sem. Praesent iaculis feugiat eros et ultrices. Fusce eu aliquam quam. Donec dapibus metus neque, a sagittis eros bibendum vitae. Nulla facilisi. Suspendisse varius ligula nulla, at aliquam nisi iaculis nec.Integer ullamcorper ex massa, sed vehicula turpis porttitor eu. Quisque maximus, urna euismod efficitur condimentum, justo metus cursus mi, vitae vestibulum lacus lorem quis erat. Vivamus lorem ipsum, placerat at pellentesque ac, dapibus quis diam. Duis volutpat pretium est feugiat porttitor. Morbi consequat mi ut lacinia efficitur. </p>
        <br></br>
        <p>Phasellus tristique mollis dui in euismod. Curabitur tristique purus tincidunt ante ullamcorper, fringilla lobortis ipsum consequat. Mauris mattis magna ante, in sagittis libero molestie quis. Sed bibendum convallis turpis. Proin a ornare erat, a rhoncus metus. Morbi consequat mi ut lacinia efficitur. Nulla sagittis magna ante, at commodo urna finibus ac. Sed bibendum, turpis eu semper posuere, mi velit ullamcorper massa, ac volutpat elit justo nec neque. Maecenas bibendum ipsum rutrum, tristique ligula ut, volutpat purus.</p>
      
       </div>

       </div>                                                                                                      


    );
}
 
export default Ourstory;