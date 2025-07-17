// import React, { useEffect, useState } from 'react';
// import { IoMdShare } from "react-icons/io";
// import axios from 'axios';
// import logo from "../assetes/Logo.jpeg"
// import BASE_URL from '../config';
//
//
// const Navbar = () => {
//
//   const [setup, setSetup] = useState(null);
//
//   useEffect(() => {
//     axios.get(`${BASE_URL}/api/setup/`)
//       .then(response => {
//         setSetup(response.data[0]); // কারণ array আসছে
//       })
//       .catch(error => {
//         console.error('Navbar API fetch error:', error);
//       });
//   }, []);
//
//
//   return (
//     <div className='max-w-3xl mx-auto flex justify-between items-center px-4 py-3 bg-violet-400'>
//
//       {/* Left side: Logo + Title */}
//       <div className='flex items-center gap-4'>
//         <img
//           src={setup?.company_logo || logo}
//           alt="Logo"
//           className='w-full h-16 rounded-lg object-cover'
//         />
//         <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
//        {setup?.company_name || "Company Name"}
//         </h1>
//       </div>
//
//       {/* Right side: Icon Button */}
//       <div>
//         <button className='text-blue-600 hover:text-blue-800 transition'>
//           <IoMdShare className='w-8 h-8 md:w-10 md:h-10' />
//         </button>
//       </div>
//     </div>
//   )
// }
//
// export default Navbar










import React, { useEffect, useState } from 'react';
import { IoMdShare } from "react-icons/io";
import logo from "../assetes/Logo.jpeg"
import {useSetup} from "../context_or_provider/SetupContext";


const Navbar = () => {

    const setup = useSetup();




  return (
    <div className='max-w-3xl mx-auto flex justify-between items-center px-4 py-3 bg-violet-400'>

      {/* Left side: Logo + Title */}
      <div className='flex items-center gap-4'>
        <img
          src={setup?.company_logo || logo}
          alt="Logo"
          className='w-full h-16 rounded-lg object-cover'
        />
        <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
       {setup?.company_name || "Company Name"}
        </h1>
      </div>

      {/* Right side: Icon Button */}
      <div>
        <button className='text-blue-600 hover:text-blue-800 transition'>
          <IoMdShare className='w-8 h-8 md:w-10 md:h-10' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
