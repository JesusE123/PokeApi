import React from 'react'

const Container = ({children}: {
    children:React.ReactNode
}) => {
  return (
    <div className=" h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {children}
    </div>
  )
}

export default Container