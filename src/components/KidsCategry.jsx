import React from 'react'

const KidsCategry = () => {
  return (
    <>
      <div className="w-full h-full">

        <h1 className="text-black font-serif text-[45px] px-8 mt-6">
          Shop By Boys & Girls Category
        </h1>

        <div className="w-full p-6 flex gap-0">

          <div className="p-4 text-center w-[30%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}Teen.png`} 
              alt="Girls" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">TEEN GIRLS</h2>
          </div>

          <div className="p-4 text-center w-[30%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}TB.png`} 
              alt="Boys" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">TEEN BOYS</h2>
          </div>

          <div className="p-4 text-center w-[27%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}Kid.png`} 
              alt="kids" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">KID GIRLS</h2>
          </div>

          <div className="p-4 text-center w-[28%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}KidB.png`} 
              alt="kids" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">KID BOYS</h2>
          </div>

        </div>
      </div>
    </>
  )
}

export default KidsCategry