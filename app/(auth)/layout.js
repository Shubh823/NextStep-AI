import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex items-center justify-center pt-40'>
      {children}
    </div>
  )
}

export default AuthLayout
