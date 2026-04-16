import React from 'react'

const Fragrances = () => {
  return (
    <>
      <div className="w-full h-full">

        <h1 className="text-black font-serif text-[45px] px-8 mt-6">
          Shop By Fragrances & Cosmetics
        </h1>

        <div className="w-full p-6 flex gap-0">

          <div className="p-4 text-center w-[30%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}Fragr.png`} 
              alt="fragrance" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">MEN FRAGRANCE</h2>
          </div>

          <div className="p-4 text-center w-[30%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}womenF.png`} 
              alt="fragrance" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">WOMEN FRAGRANCE</h2>
          </div>

          <div className="p-4 text-center w-[27%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}Cosmetic.png`} 
              alt="cosm" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">COSMETICS</h2>
          </div>

          <div className="p-4 text-center w-[28%] hover:text-gray-300">
            <img 
              src={`${import.meta.env.BASE_URL}Bk.png`} 
              alt="Bak" 
              className="w-full h-[340px] object-cover"
            />
            <h2 className="font-bold mt-2">BAKHOOR</h2>
          </div>

        </div>
      </div>
    </>
  )
}

export default Fragrances