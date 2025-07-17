// import React, { useEffect, useState } from 'react';
// import profileFallback from "../assetes/profile.jpg";
// import heroFallback from "../assetes/hero.jpg";
// import BASE_URL from '../config';
// import axios from "axios";
//
// const Hero = () => {
//   const [herosection, setHerosection] = useState(null);
//
//   useEffect(() => {
//     axios.get(`${BASE_URL}/api/about/`)
//       .then(response => {
//         setHerosection(response.data[0]); // ঠিক নাম ব্যবহার করলাম
//       })
//       .catch(error => {
//         console.error('Hero/About me API fetch error:', error);
//       });
//   }, []);
//
//   if (!herosection) return <p className="text-center py-10">Loading...</p>;
//
//   return (
//     <div className="relative max-w-3xl mx-auto">
//       {/* Top Hero Image */}
//       <div className="h-100 overflow-hidden rounded-t-lg">
//         <img
//           src={herosection.banner || heroFallback}
//           alt="Banner"
//           className="w-full h-full object-cover object-top"
//         />
//       </div>
//
//       {/* Profile Picture (Floating) */}
//       <div className="absolute top-80 left-1/2 transform -translate-x-1/2 animate-float">
//         <img
//           src={herosection.hero_image || profileFallback}
//           alt="Profile"
//           className="w-32 h-32 rounded-full border-4 border-white shadow-md"
//         />
//       </div>
//
//       {/* Bottom Info Section */}
//       <div className="bg-slate-100 pt-20 pb-10 px-6 rounded-b-lg shadow-md">
//         <div className="text-center space-y-2">
//           <h1 className="text-2xl font-bold text-gray-800 capitalize">
//             {herosection.name}
//           </h1>
//           <h2 className="text-lg text-blue-600 font-semibold capitalize">
//             Freelance Digital IT ({herosection.designation})
//           </h2>
//           <p className="text-gray-700 text-sm leading-relaxed max-w-xl mx-auto">
//             {herosection.Short_description}
//           </p>
//         </div>
//
//         <div className="flex justify-center gap-4 mt-6">
//           <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
//             Save to Phone
//           </button>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
//             Share to Friend
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Hero;
//


import React, {useEffect, useState} from 'react';
import profileFallback from "../assetes/profile.jpg";
import heroFallback from "../assetes/hero.jpg";
import {useAbout} from "../context_or_provider/AboutContext";
import {useSetup} from "../context_or_provider/SetupContext";

const Hero = () => {
    const setup = useSetup();
    const herosection = useAbout();


    if (!herosection) return <p className="text-center py-10">Loading...</p>;

    return (
        <div className="relative max-w-3xl mx-auto">
            {/* Top Hero Image */}
            <div className="h-100 overflow-hidden rounded-t-lg">
                <img
                    src={herosection.banner || heroFallback}
                    alt="Banner"
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Profile Picture (Floating) */}
            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 animate-float">
                <img
                    src={herosection.hero_image || profileFallback}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md"
                />
            </div>

            {/* Bottom Info Section */}
            <div className="bg-slate-100 pt-20 pb-10 px-6 rounded-b-lg shadow-md">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-800 capitalize">
                        {herosection.name}
                    </h1>
                    <h2 className="text-lg text-blue-600 font-semibold capitalize">
                        {setup?.company_name || "Company Name"} ({herosection.designation})
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xl mx-auto">
                        {herosection.Short_description}
                    </p>
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                        Save to Phone
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                        Share to Friend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

