import React from 'react'

const food = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 '>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Item</h1>

      {/* filter row */}

      <div className="">

      </div>

      {/* filter type */}

      <div className="">
        <p className='font-bold text-grey-700'>Filter Type</p>

        <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
            
        </div>
      </div>

      {/* filter price */}
      <div>
        <p className='font-bold text-grey-700'>Filter Price</p>

        <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                $
            </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                $$
                </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                $$$
                </button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                $$$$
                </button>
            </div>
      </div>
    </div>
  )
}

export default food
