import React from 'react'

const IconCardContainer = ( { child, className, ...rest } ) => {
  return (
    <div className={" p-4 shadow-lg "+className} {...rest} >{ child }</div>
  )
}

export default IconCardContainer