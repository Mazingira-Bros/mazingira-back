import React from 'react';
import Logo from '../assets/logo4.png';


function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg">
    <div className="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">Login</h1>
      <form>
        <div className="mb-6">
          <label for="email" className="block mb-2 font-medium"></label>
          <input type="email" id="email" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label for="password" className="block mb-2 font-medium"></label>
          <input type="password" id="password" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center ">
            <input type="checkbox" id="remember" className="mr-2 " />
            <label for="remember">Remember me</label>
          </div>
          <a href="/password-reset" className="font-semibold hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">Login</button>
      </form>

      <div className="mt-4 text-center">
        <p>Don't have an account? <a href="/registration" className="font-semibold hover:underline">Register</a></p>
      </div>


    </div>
    <div className="mt-8 text-center text-white font-semibold mt-40">
        <p>For further support, you may visit the Help Center or contact our customer service team.</p>
        <img src={Logo} alt='logo' className="h-25 w-40 mx-auto mt-4" />
      </div>
  </div>

  );
}

export default Login;
