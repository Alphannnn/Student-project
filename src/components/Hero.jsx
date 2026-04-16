 import React from 'react'

const Hero = () => {
  return (
    <>
      <section
        className="relative h-[580px] bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Backi.png)` }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-black text-center px-4">

          <h1 className="text-[80px] tracking-wide font-serif font-bold">
            SUPER SALE
          </h1>

          <p className="text-[40px] mt-2 font-serif">FLAT</p>

          <h2 className="text-6xl md:text-8xl font-bold my-4 font-serif">
            25% & 50%
          </h2>

          <p className="text-lg md:text-xl font-serif">OFF</p>

          <p className="mt-6 text-sm md:text-lg tracking-widest">
            25TH MARCH TILL 5TH APRIL
          </p>

        </div>
      </section>
    </>
  )
}

export default Hero