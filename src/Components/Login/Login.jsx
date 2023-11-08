import { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

  const {signIn,handleGoogle} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      console.log(result)
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.error(error);
    })
  };
  

  return (
    <div>
      <div className="flex justify-center lg:pb-40 mt-5 ">
        <div className="flex justify-center rounded shadow max-w-7xl w-[90%] bg-cyan-900 py-24  m-4">
          <div className="h-[90%] w-full mt-7">
            <div className=" flex flex-col justify-center items-center space-y-2">
              <div>
                <h1 className="text-xl font-semibold text-white ">Here you can Login</h1>
              </div>
            </div>
            <form onSubmit={handleLogin} >
              <div className="flex flex-col justify-center items-center mt-7 space-y-2 md:space-y-2">
                <div className="space-y-1">
                  <h1 className="text-base text-white">Email</h1>
                  <input
                    type="email"
                    placeholder="Your Email...."
                    name="email"
                    className="rounded-md px-5 py-2 bg-gray-100 text-gray-900 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="text-base text-white">Password</h1>
                  <div className='flex items-center'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="******"
                    value={password}
                    onChange={handlePasswordChange}
                    className="rounded-md px-5 py-2 bg-gray-100 text-gray-600 focus:outline-none font-semibold md:w-72 lg:w-[340px]"
                  />
                  <div className='-ml-5' onClick={togglePasswordVisibility}>
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
                 
                </div>
                <div className="-ml-44">
                  <a className="text-sm font-medium text-red-600 hover:text-green-600 hover:underline underline-offset-4">
                    Forgot your Password ?
                  </a>
                </div>
              </div>
              <div className="text-center mt-5">
                  <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500">login</button>
              </div>
            </form>
            <div className="text-center flex justify-center my-1">
              <h2 className="text-lg font-medium text-black">
                Don't Have a Account.
              </h2>
              <Link
                to="/register"
                className=" text-red-400 flex items-center text-lg font-bold hover:underline hover:text-green-600"
              >
                <h1>Please Register </h1>
                <BsArrowRight></BsArrowRight>
              </Link>
            </div>
            <div className="flex justify-center text-center mx-auto gap-3 my-3">
          <button onClick={handleGoogle} className="btn btn-accent text-white font-semibold bg-gradient-to-r from-sky-500 to-indigo-500">
            <img src="https://i.ibb.co/NYj4P6S/Screenshot-2023-10-18-011721-removebg-preview.png" alt="" className='w-10' />
              Log in with Google
            </button>
            </div>
          </div>
        </div>
      </div>


  
    </div>
  );
};

export default Login;
