import { Dock, FolderCode, MonitorCheck } from 'lucide-react';
import React from 'react';

const featuresData = [
    {
        title: "Static Website Development",
        description: "Create fast, simple, and visually appealing websites that provide essential information without the complexity of dynamic content.",
        icon: Dock,
    },
    {
        title: "Dynamic Website Development",
        description: "Build interactive websites that engage users with real-time content updates and personalized experiences tailored to your audience.",
        icon: MonitorCheck,
    },
    {
        title: "Web Application Software Development",
        description: "Develop custom web applications designed to enhance business efficiency, streamline processes, and improve user engagement across all devices.",
        icon: FolderCode,
    },


];

const Features = () => {
    return (
        <section className="relative py-16 bg-white overflow-hidden">
            {/* Gradient Overlay for Fading Border Effect */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-75"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-75"></div>
            </div>

            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-10 relative z-20">
                {/* <p className="text-blue-500  font-bold text-xl uppercase">services</p> */}
                <h2 className="mt-2 text-5xl font-bold text-gray-900 leading-[62px]">
                    We are development experts on all technologies
                </h2>
                <p className="mt-4 text-gray-500 text-xl">
                    We provide tailored solutions that enhance your digital presence, ensuring your website and applications are user-friendly, efficient, and designed to meet your specific business needs.
                </p>
            </div>

            {/* Features Grid with Fading Border */}
            <div className="relative z-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white   overflow-hidden"
                >
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className="relative group p-6 flex flex-col transition duration-300"
                            style={{
                                borderTop: index > 3 ? '1px solid #e5e7eb' : 'none',
                                borderLeft: index % 4 !== 0 ? '1px solid #e5e7eb' : 'none',
                            }}
                        >
                            {/* Small Left Hover Indicator */}
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-6 rounded-tr-md rounded-br-md group-hover:h-8 w-1 bg-gray-300 group-hover:bg-blue-500 transition-all duration-300"></div>

                            {/* Icon */}
                            <div className="text-3xl text-blue-500 mb-4">
                                < feature.icon />
                            </div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-600 text-sm flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
