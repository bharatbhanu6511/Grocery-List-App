import React from 'react'

const Footer = () => {
    const today=new Date()
  return (
    <footer id='footer'>
      <p>Copyright &copy; {today.getFullYear()} | All rights reserved</p>
    </footer>
  )
}

export default Footer
