import {
   breadProducts,
   burgerProducts,
   pizzaProducts,
   products,
} from '../../assets/data/products';

import ProductCard from '../shared/ProductCard';
import React from 'react';
import popularFoodsImg01 from '../../assets/images/bread.png';
import popularFoodsImg02 from '../../assets/images/hamburger.png';
import popularFoodsImg03 from '../../assets/images/pizza.png';
import { useState } from 'react';

const ppFoodsData = [
   { display: 'All', imgUrl: null },
   { display: 'Bread', imgUrl: popularFoodsImg01 },
   { display: 'Burger', imgUrl: popularFoodsImg02 },
   { display: 'Pizza', imgUrl: popularFoodsImg03 },
];

function PopularFoods() {
   const [category, setCategory] = useState('All');
   const getRelProducts = () => {
      switch (category) {
         case 'All':
            return products;

         case 'Bread':
            return breadProducts;

         case 'Burger':
            return burgerProducts;

         default:
            return pizzaProducts;
      }
   };

   return (
      <section id='popularFoods' className='mt-14 sm:mt-20'>
         <h2 className='text-2xl mb-6 text-center font-rnroll font-bold '>
            Popular Foods
         </h2>
         <div className='flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-2 px-3 sm:py-3 sm:px-5 rounded-sm bg-red-500 text-white'>
            {ppFoodsData.map((ppFood, i) => (
               <button
                  onClick={() => setCategory(ppFood.display)}
                  className={`${
                     category == ppFood.display ? 'bg-white text-red-500' : null
                  } flex gap-1 items-center w-fit rounded-sm py-1 px-2 sm:px-3`}
                  key={i}
               >
                  {ppFood.imgUrl ? (
                     <img
                        className='h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7'
                        src={ppFood.imgUrl}
                        alt='Popular food img'
                     />
                  ) : null}
                  <span className=''>{ppFood.display}</span>
               </button>
            ))}
         </div>
         <div className='flex flex-wrap gap-x-[4%] sm:gap-x-[5%] lg:gap-x-[2.66666667%] gap-y-4 mt-10'>
            {getRelProducts().map((product) => (
               <ProductCard product={product} key={product.id} />
            ))}
         </div>
      </section>
   );
}

export default PopularFoods;
