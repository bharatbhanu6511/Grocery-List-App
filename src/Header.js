import React from 'react'

const Header = (props) => {
  const headingStyle={
    backgroundColor:'royalblue',
    color:'#fff'
  }
  return (
    <header style={headingStyle}>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps={
  title:"Store name"
}

export default Header
