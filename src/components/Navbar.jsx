import { React } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  // console.log(user);
  const hndlelogout = async () =>{
    try{
      await logOut();
      navigate('/');
      
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className=' flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <h1 className=' text-red-600 text-4xl font-bold cursor-pointer uppercase'>Netflix</h1>
      </Link>
      {user?.email ?        
      <div>
          <Link to='/account'>
            <button className='px-6 py-2 rounded cursor-pointer text-white'>Account</button>
          </Link>
            <button onClick={hndlelogout} className=' bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Log Out</button>

        </div> :         <div>
          <Link to='/login'>
            <button className='px-6 py-2 rounded cursor-pointer text-white'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className=' bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link>

        </div>}
    </div>
  )
}

export default Navbar