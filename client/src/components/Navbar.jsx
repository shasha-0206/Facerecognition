
import {Link,Outlet} from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [Search_visibility , setSearch_visibility] = useState(false);
    return (
        <>
        <nav className = "navbar">

            {/* logo */}
            <Link to = "/" className = "flex-none w-10">
            {/* <img src={logo} className='w-full'/> */}
            <p className="w-full text-bold text-[20px]">LOGO</p>
            </Link>

            {/* search bar */}
            <div className={'absolute bg-white w-full left-0 top-full mt-0.5 border-b border-gray py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md-auto md:show ' + (Search_visibility?"show" :"hide") }>
                {/* showing search box at max and mid screeens only */}

                <input
                    type="text" 
                    placeholder='Search' 
                    className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full
                    placeholder:text-dark-grey md:pl-12' />

                <i className='fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey '></i>
                {/* image src, postion , rigth,medium screen , md,text size , text color */}
            </div>

            <div className='flex items-center gap-3 md:gap-6 ml-auto'>

                {/* small screen serach box appear on button click */}
                <button className='md:hidden w-12 h-12 bg-grey rounded-full flex items-center justify-center' 
                onClick={() => {setSearch_visibility(prev_val => !prev_val)}}>

                    <i className='fi fi-rr-search text-dark-grey text-xl'></i>

                </button>

                {/* link to go to editor page */}
                <Link to="/editor" className='hidden md:flex gap-2 link'>
                <i className='fi fi-rr-file-edit'></i>
                <p>Write</p>
                </Link>
                
                {/* link to go to login pages */}
                <Link to = "/signin" className='btn-dark py2'>Signin</Link>
                <Link to = "/signup" className='hidden btn-light py2 md:block'>Signup</Link>

            </div>

        </nav>

        <Outlet /> 
        {/* outlet is used for making the nested routes work as expecteded */}
        </>
    )
}

export default Navbar;