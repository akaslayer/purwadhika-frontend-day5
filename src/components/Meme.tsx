import React from 'react'


interface MemeProps {
  memePic: string
}

const Meme: React.FC<MemeProps> = ({ memePic }) => {
  return (
    <div className="card bg-white p-4 flex flex-col gap-1 rounded-md"><img src={memePic} alt="" /></div>
  )
}

export default Meme