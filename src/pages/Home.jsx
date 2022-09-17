import {
   Category,
   Features,
   Hero,
   HotPizza,
   PopularFoods,
   Testimonial,
   WhyChooseTasty,
} from '../components/home';

import React from 'react';
import { helmet } from '../helmet';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function Home() {
   helmet('Home');
   return (
      <div className='home'>
         <Hero />
         <Category />
         <Features />
         <PopularFoods />
         <WhyChooseTasty />
         <HotPizza />
         <Testimonial />
         <div className='test h-28'></div>
      </div>
   );
}

export default Home;
