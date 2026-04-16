import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="bg-black w-full h-[60px] text-white flex justify-between">
        
        <div className="mt-[8px] ml-[50px] flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}pak.png`} 
            alt="logo" 
            className="h-[14px] w-[20px]"
          />
          <span>Pk</span>
        </div>

        <div className="items-center ml-[150px]">
          <img 
            src={`${import.meta.env.BASE_URL}j.logo.png`} 
            alt="logo" 
            className="h-[50px] w-[40px]" 
          />
        </div>

        <div className="mt-[15px] mr-[50px]">
          <a href="#" className="text-[14px] pl-[12px] ml-[20px] hover:text-gray-300">SEARCH</a>
          <a href="#" className="text-[14px] pl-[12px] ml-[20px]">CART</a>
          <a href="#" className="text-[14px] pl-[12px] ml-[20px]">PKR^</a>
        </div>

      </nav>
    </>
  )
}

export default Nav