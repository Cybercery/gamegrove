import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import BgVideo from '../images/Bg_video.mp4'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
      <>
      <video autoPlay muted loop id="myVideo" className='absolute z-50 w-screen h-screen object-cover'>
        <source src="" type="video/mp4"  />
      </video>
        <main className='bg-[#181C24] h-screen w-screen flex justify-center content-center relative'>    
          
          <section className='self-center bg-transparent border-[0.1rem]  w-[95vw] lg:w-[30vw] h-[45vh] lg:h-[60vh] rounded-3xl felx justify-center content-center z-[60] backdrop-opacity-70'>
            <div className='bg-red-500 w-[50%] mx-auto'>                                            
              <p> FocusApp </p>                       
                               
              <form>                                              
                <div>
                  <label htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"                                    
                    required                                                                                
                    placeholder="Email address"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"                                    
                    required                                                                                
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                          
                <div>
                  <button                                    
                    onClick={onLogin}                                        
  >      
                    Login                                                                  
                  </button>
                </div>                               
              </form>
               
              <p className="text-sm text-white text-center">
                No account yet? {' '}
                <NavLink to="/signup">
                  Sign up
                </NavLink>
              </p>           
            </div>
          </section>
        </main>
      </>
    )
}
 
export default Login