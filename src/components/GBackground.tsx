import React, { ReactNode } from 'react'

const GBackground = ({children}:{children:ReactNode}) => {
  return (
    <div className="absolute inset-0 -z-10  w-full bg-[#0D1321] bg-[linear-gradient(to_right,#141C2D_1px,transparent_1px),linear-gradient(to_bottom,#141C2D_1px,transparent_1px)] bg-[size:4rem_4rem]">

        {children}
    </div>
  )
}

export default GBackground