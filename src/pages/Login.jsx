import React, { useState } from 'react';

import { CommonBanner } from '../components/shared';
import { Link } from 'react-router-dom';
import { helmet } from '../helmet';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { notify } from '../helper/notify';

function Login() {
   const navigate = useNavigate()
   helmet('Login');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   const handleUserLoginInfo = async () => {
      try {
         const result = await signInWithEmailAndPassword(auth, userEmail, userPassword)
         if(result.user){
            navigate('/')
         }else{
            notify("User email or password wrong", 'error')
         }
      } catch (error) {
         console.log(error)
         notify("User email or password wrong", 'error')
      }
   };
   return (
      <section>
         <CommonBanner title={'Login'} />
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
                  onClick={handleUserLoginInfo}
                  type='submit'
                  className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md mx-auto mt-3 text-white bg-red-500'
               >
                  Login
               </button>
            </form>

            <Link
               className='block mt-5 mb-14 underline mx-auto w-fit'
               to='/register'
            >
               Don't have an account? Create one!
            </Link>
         </div>
      </section>
   );
}

export default Login;
