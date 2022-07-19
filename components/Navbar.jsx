import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'


import { Cart } from './';
import { useStateContext} from '../context/StateContext';


import * as DropdownMenu from '@radix-ui/react-dropdown-menu';



const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">PHILIP STORE Headphones</Link>
      </p>



      <p className="logo">       
        <DropdownMenu.Root>
        <DropdownMenu.Trigger className='trigger'> ABOUT
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className='content'>

        <DropdownMenu.Item className='item'><Link href="/ourstory"><a>Our Story</a></Link></DropdownMenu.Item>
        <DropdownMenu.Separator />

        <DropdownMenu.Item className='item'><Link href="/reviews"><a>Reviews</a></Link></DropdownMenu.Item>
        <DropdownMenu.Separator />
        
        <DropdownMenu.Item className='item'>FAQs</DropdownMenu.Item>
        <DropdownMenu.Separator />

        </DropdownMenu.Content>
        </DropdownMenu.Root>
      </p>


      {/* <p className="logo">
        <Link href="/">BLOG</Link>
      </p> */}



      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar