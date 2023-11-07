import { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErrors, setPasswordErrors] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const validatePassword = (password) => {
        const errors = [];
    
        if (password.length < 6) {
          errors.push("Password must be at least 6 characters.");
        }
    
        if (!/[A-Z]/.test(password)) {
          errors.push("Password must contain at least one capital letter.");
        }
    
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
          errors.push("Password must contain at least one special character.");
        }
    
        return errors;
      };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const displayName = form.get("fastName");

        console.log(email, password, displayName)
    
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            setPasswordErrors(passwordErrors.join(" "));
            return;
          }
     createUser(email, password, displayName)
     .then(result => {
        console.log(result)
        navigate(location?.state ? location.state : '/')
     })
     .catch(error => {
        console.error(error)
     })
    }
    return (
        <div>
<div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
    <div className="bg-white text-black rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-blue-500 py-10 px-10">
                <img src="https://i.ibb.co/7rQF0g9/12953573-Data-security-05-removebg-preview.png" alt="" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to Register</p>
                </div>
           
                <form onSubmit={handleRegister}>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">First name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name="fastName" required className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Md SHiFaT"/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Last name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" name="lastName" required className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="RaHMaN"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label  className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" name="email" required className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="mdshifatrahman@gmail.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label  className="text-xs font-semibold px-1">Password</label>
                            <div className="flex items-center">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                      <div className="-ml-10 cursor-pointer" onClick={togglePasswordVisibility}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </div>
                          
                    </div>
                    {
                        passwordErrors && (
                            <div className="mt-2 text-red-600">{passwordErrors}</div>
                        )}
                            <div className="mt-2">
                                <input type="checkbox" name="chakbox" required id="" />
                                <span>   Trams And Conditions</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">                      
                            <button className="block w-full max-w-xs mx-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>                          
                        </div>
                    </div>
                 </div>
                </form>
                <div className="text-center flex justify-center my-1">
                <h2 className="text-lg font-medium text-black">
                        Already Have a Account.
                                 </h2>
                                 <Link to="/login" className=" text-blue-900 flex items-center text-lg font-bold hover:underline hover:text-green-600">
                            <h1>Please Login </h1><BsArrowRight></BsArrowRight>
                          </Link>    
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Register;