import React from 'react';
import {FaBullhorn, FaChartLine, FaPencilRuler, FaChartPie, FaSearch, FaUsers} from 'react-icons/fa';
import {useService} from "../context_or_provider/ServiceContext";

// const services = [
//   {
//     icon: <FaBullhorn className="w-8 h-8 text-indigo-600" />,
//     title: "Digital Marketing Strategy",
//     desc: "Create data-driven marketing strategies that drive real results and brand growth.",
//   },
//   {
//     icon: <FaUsers className="w-8 h-8 text-blue-600" />,
//     title: "Social Media Marketing",
//     desc: "Engage your audience through targeted campaigns on Facebook, Instagram, and more.",
//   },
//   {
//     icon: <FaSearch className="w-8 h-8 text-green-600" />,
//     title: "SEO Optimization",
//     desc: "Increase your website’s ranking and visibility on search engines like Google.",
//   },
//   {
//     icon: <FaPencilRuler className="w-8 h-8 text-pink-600 " />,
//     title: "Content Creation",
//     desc: "Produce professional graphics, videos, and content that connects with your audience.",
//   },
//   {
//     icon: <FaChartLine className="w-8 h-8 text-purple-600" />,
//     title: "Brand Development",
//     desc: "Build a strong, recognizable brand that reflects your values and mission.",
//   },
//   {
//     icon: <FaChartPie className="w-8 h-8 text-red-600" />,
//     title: "Analyzing & Reporting",
//     desc: "Get detailed performance reports to track progress and optimize your campaigns.",
//   },
// ];


const Service = () => {

    const services = useService();

    if (!services) return <p className="text-center py-10">Loading...</p>;


    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <div className="mb-4">
                            <img
                                src={service.icon_or_image}
                                alt="image"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            {service.headline}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {service.sub_headline}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
