import React, { useState } from 'react';

import { CommonBanner } from '../components/shared';
import { Link } from 'react-router-dom';
import { helmet } from '../helmet';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { notify } from '../helper/notify';

function Register() {
   helmet('Register');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   const handleUserRegisterInfo = async () => {
      try {
         const result = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
         if(result.user){
            notify("Register Success", 'success')
         }else{
            notify("Register Failed", 'error')
         }
      } catch (error) {
         notify("Register Failed", 'error')
         console.log(error)
      }
   };
   return (
      <section>
         <CommonBanner title={'Register'} />
         <div>
            <form
               onSubmit={(e) => handleSubmit(e)}
               className='flex flex-col items-center w-[60vw] sm:w-[40vw] max-w-[500px] mx-auto py-4 px-3 rounded-sm bg-lpink [&_input]:px-3 [&_input]:py-1  [&_input]:rounded-sm [&_input]:mb-3 [&_input]:outline-none'
            >
               <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='email'
                  required
                  pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                  placeholder='Enter your email'
               />

               <input
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  required
                  minLength={6}
                  maxLength={21}
                  placeholder='Enter your password'
               />
               <button
                  onClick={handleUserRegisterInfo}
                  type='submit'
                  className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md mx-auto mt-3 text-white bg-red-500'
               >
                  Register
               </button>
            </form>

            <Link
               className='block mt-5 mb-14 underline mx-auto w-fit'
               to='/login'
            >
               Already have an account? Click to Login
            </Link>
         </div>
      </section>
   );
}

export default Register;
