import React from 'react';
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 PHILIP Watches & Headphones All rights reserverd</p>
      <p className="icons">

        {/* <AiFillInstagram />
        <AiFillFacebook /> */}

      

        <Link href='https://www.facebook.com/philip.lee.94009'><a> <AiFillFacebook />  </a></Link>

        <Link href='https://www.facebook.com/philip.lee.94009'><a> <AiFillInstagram /> </a></Link>

      </p>
    </div>
  )
}

export default Footer