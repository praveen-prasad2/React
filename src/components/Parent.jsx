import React from 'react'

function parent(props) {
  return (
    <>
    <h1>Parent</h1>
    {props.children}
    </>
  )
}

export default parent