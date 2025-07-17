// import React from 'react';
// import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';
// import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';
//
// const ContactInfo = () => {
//   const contactItems = [
//     {
//       icon: <MdCall className="text-green-600 w-6 h-6" />,
//       title: "Call",
//       subtitle: "+8801819836486",
//       link: "tel:+8801819836486",
//     },
//     {
//       icon: <FaWhatsapp className="text-green-600 w-6 h-6" />,
//       title: "WhatsApp",
//       subtitle: "Connect on WhatsApp",
//       link: "https://wa.me/8801819836486",
//     },
//     {
//       icon: <MdEmail className="text-red-600 w-6 h-6" />,
//       title: "Email",
//       subtitle: "adriyanayon@gmail.com",
//       link: "mailto:adriyanayon@gmail.com",
//     },
//     {
//       icon: <FaGlobe className="text-blue-600 w-6 h-6" />,
//       title: "Website",
//       subtitle: "www.freelancedigitalit.com",
//       link: "https://www.freelancedigitalit.com",
//     },
//     {
//       icon: <FaFacebook className="text-blue-700 w-6 h-6" />,
//       title: "Facebook",
//       subtitle: "View Facebook Profile",
//       link: "https://facebook.com",
//     },
//     {
//       icon: <FaInstagram className="text-pink-600 w-6 h-6" />,
//       title: "Instagram",
//       subtitle: "Follow on Instagram",
//       link: "https://instagram.com",
//     },
//     {
//       icon: <FaYoutube className="text-red-600 w-6 h-6" />,
//       title: "YouTube",
//       subtitle: "View YouTube Channel",
//       link: "https://youtube.com",
//     },
//     {
//       icon: <MdLocationOn className="text-purple-600 w-6 h-6" />,
//       title: "Location",
//       subtitle: "39, Nawab Ali Road, Akua Goru Khaner Mor, Mymensingh",
//       link: "https://maps.google.com",
//     },
//   ];
//
//   return (
//     <div className="max-w-3xl mx-auto p-4 space-y-4">
//       {contactItems.map((item, index) => (
//         <a
//           href={item.link}
//           key={index}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md hover:shadow-md transition"
//         >
//           <div className="mt-1">
//             {item.icon}
//           </div>
//           <div>
//             <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
//             <p className="text-sm text-gray-600">{item.subtitle}</p>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };
//
// export default ContactInfo;


import React from 'react';
import {MdCall, MdEmail, MdLocationOn} from 'react-icons/md';
import {FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaGlobe} from 'react-icons/fa';
import {useAbout} from "../context_or_provider/AboutContext";
import {useContactWithMe} from "../context_or_provider/ContactContext";

const ContactInfo = () => {
    const herosection = useAbout();
    const contactItems = useContactWithMe();

    if (!contactItems) {
        return <p className="text-center py-10">Loading contact info...</p>;
    }


    // const contactItems = [
    //   {
    //     icon: <MdCall className="text-green-600 w-6 h-6" />,
    //     title: "Call",
    //     subtitle: `${herosection?.mobile || "mobile number"}`,
    //     link: `tel:${herosection?.mobile || "mobile number"}`,
    //   },
    //     // .......................... phone number design fixed..............//
    //   {
    //     icon: <FaWhatsapp className="text-green-600 w-6 h-6" />,
    //     title: "WhatsApp",
    //     subtitle: "Connect on WhatsApp",
    //     link: "https://wa.me/8801819836486",
    //   },
    //   {
    //     icon: <MdEmail className="text-red-600 w-6 h-6" />,
    //     title: "Email",
    //     subtitle: "adriyanayon@gmail.com",
    //     link: "mailto:adriyanayon@gmail.com",
    //   },
    //   {
    //     icon: <FaGlobe className="text-blue-600 w-6 h-6" />,
    //     title: "Website",
    //     subtitle: "www.freelancedigitalit.com",
    //     link: "https://www.freelancedigitalit.com",
    //   },
    //   {
    //     icon: <FaFacebook className="text-blue-700 w-6 h-6" />,
    //     title: "Facebook",
    //     subtitle: "View Facebook Profile",
    //     link: "https://facebook.com",
    //   },
    //   {
    //     icon: <FaInstagram className="text-pink-600 w-6 h-6" />,
    //     title: "Instagram",
    //     subtitle: "Follow on Instagram",
    //     link: "https://instagram.com",
    //   },
    //   {
    //     icon: <FaYoutube className="text-red-600 w-6 h-6" />,
    //     title: "YouTube",
    //     subtitle: "View YouTube Channel",
    //     link: "https://youtube.com",
    //   },
    //   {
    //     icon: <MdLocationOn className="text-purple-600 w-6 h-6" />,
    //     title: "Location",
    //     subtitle: "39, Nawab Ali Road, Akua Goru Khaner Mor, Mymensingh",
    //     link: "https://maps.google.com",
    //   },
    // ];

    // return (
    //     <div className="max-w-3xl mx-auto p-4 space-y-4">
    //         {Array.isArray(contactItems) && contactItems.map((item, index) => (
    //             <a
    //                 href={item?.link || "link"}
    //                 key={index}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md hover:shadow-md transition"
    //             >
    //                 <div className="mt-1">
    //                     {item?.icon || "icon"}
    //                 </div>
    //                 <div>
    //                     <h3 className="text-base font-semibold text-gray-800">{item?.media_name || "media name"}</h3>
    //                     <p className="text-sm text-gray-600">{item?.hint || "hint"}</p>
    //                 </div>
    //             </a>
    //         ))}
    //     </div>
    // );


    return (


        <div className="max-w-3xl mx-auto p-4 space-y-4">


                {/*mobile design fixed*/}
            <a
                href={herosection?.mobile || "media name"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md hover:shadow-md transition"
            >
                <div className="mt-1">
                      <MdCall className="text-green-600 w-6 h-6" />,
                </div>

                <div>
                    <h3 className="text-base font-semibold text-gray-800">Mobile</h3>
                    <p className="text-sm text-gray-600">{herosection?.mobile || "media name"}</p>
                </div>
            </a>

                {/*mobile design fixed*/}

            {contactItems.map((item, index) => (
                <a
                    href={item?.link || "#"}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md hover:shadow-md transition"
                >
                    {/* Icon from API */}

                    {/*<div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">*/}
                        <img
                            src={item?.icon}
                            alt={item?.media_name || "icon"}
                            className="w-12 h-12 object-contain"
                        />
                    {/*</div>*/}

                    {/* Text content */}
                    <div>
                        <h3 className="text-base font-semibold text-gray-800 capitalize">
                            {item?.media_name || "Media"}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {item?.hint || "Info not available"}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ContactInfo;

