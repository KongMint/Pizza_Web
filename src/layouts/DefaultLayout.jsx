import { Footer, Header } from './layoutComponents';

import React from 'react';
import RouteComp from '../router/RoutesComp';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function DefaultLayout() {
   
   return (
      <div className='min-h-screen max-w-7xl px-2 sm:px-3 md:px-4 lg:px-6 mx-auto'>
         <ToastContainer/>
         <Header />
         <div className='mt-[62px] sm:mt-[72px] md:mt-[76px]'>
            <RouteComp />
         </div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
