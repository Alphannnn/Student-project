import React from 'react'

const Collections = () => {
  return (
    <>
      <div className="w-full mt-15">
        
        <h1 className="text-black font-serif text-[45px] px-8">
          Featured Collections
        </h1>

        <div className="w-full p-6 flex justify-between">

          <div className="bg-red-100 p-4 text-center w-[23%]">
            <img 
              src={`${import.meta.env.BASE_URL}kurta.png`} 
              alt="kurta" 
              className="w-full h-[460px] object-cover" 
            />
            <h2 className="font-bold mt-2">Heritage Edit</h2>
            <p>Rooted in legacy, styled for now.</p>
          </div>

          <div className="bg-red-100 p-4 text-center w-[23%]">
            <img 
              src={`${import.meta.env.BASE_URL}gray.png`} 
              alt="suit" 
              className="w-full h-[450px] object-cover" 
            />
            <h2 className="font-bold mt-2">Unstitched Collection</h2>
            <p>Eid unstitched styles just dropped!</p>
          </div>

          <div className="bg-red-100 p-4 text-center w-[23%]">
            <img 
              src={`${import.meta.env.BASE_URL}wascoat.png`} 
              alt="kurta" 
              className="w-full h-[450px] object-cover"
            />
            <h2 className="font-bold mt-2">Autograph Series</h2>
            <p>Signature style, tailored for those who stand apart.</p>
          </div>

          <div className="bg-red-100 p-4 text-center w-[23%]">
            <img 
              src={`${import.meta.env.BASE_URL}pink.png`} 
              alt="Suit" 
              className="w-full h-[450px] object-cover" 
            />
            <h2 className="font-bold mt-2">Essentials '26</h2>
            <p>Refresh your wardrobe with RTW Essentials.</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Collections