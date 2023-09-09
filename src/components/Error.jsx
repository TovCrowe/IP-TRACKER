import React from 'react'


function Error({children}) {
  return (
    <div className="bg-red-300 flex justify-evenly p-7 rounded-xl font-extrabold uppercase">
      <p>{children}</p>
    </div>
  )
}

export default Error