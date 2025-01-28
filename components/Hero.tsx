import React from 'react'

const Hero = () => {
  return (
    <div
    className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Harya Pranatreshna
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Gresik Plant Manager for Cargill Cocoa and Chocolate
        </p>
        {/* <Image
          src="/heroimg.jpg"
          width={2600} height={2400}
          alt="Gambar Harya"
          className="w-full  mt-6 md:mt-10 rounded-lg shadow-md object-cover"
        /> */}
      </div>
    </div>
  )
}

export default Hero
