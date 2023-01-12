import React from 'react'
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
    <div className='f1'>
    To Hire me , Contact at :- +91 721 905 1363
    </div>
    <div className='f2'>
    {year} @ Mayank Patekar , All Copyrights reserved.
    </div>
    </footer>
  )
}

export default Footer
