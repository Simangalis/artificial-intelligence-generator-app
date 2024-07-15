import Link from 'next/link';
import React from "react";
import Image from "next/image";
import {  ArrowRight, FolderGit, MonitorSmartphone, Settings, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Easy to Use",
    description: "Our AI-powered app makes content creation effortless.",
    icon: MonitorSmartphone
  },
  {
    title: "Fast Results",
    description: "Generate high-quality text in seconds with AI technology.",
    icon:FolderGit
  },
  {
    title: "Customizable",
    description: "Tailor content to your needs with flexible options.",
    icon: Settings
  },
  {
    title: "Secure",
    description: "Your data and content are safe with advanced security measures.",
    icon: ShieldCheck
  }
];

function Hero() {
  return (

    <div className="flex flex-col items-center justify-center w-full px-4 py-8 md:py-16">
        <div className="flex justify-center ">
        <Image src={"/creative.png"} alt="logo" width={80} height={80} />
      </div>
      <h1 className="text-black-500 font-bold text-4xl md:text-6xl mb-4 mt-8 text-center">
        AI-Content <span className="text-primary">Generator</span>
      </h1>
      <p className="text-center">
      Welcome to AI-Content Generator App! Unleash the power of AI-driven insights and discover a whole new way to engage.
      </p>

      <Link href='/dashboard'>

    <button className="bg-primary text-white px-4 py-2 mt-4 rounded hover:bg-primary-dark flex items-center gap-2">
      Get Started <ArrowRight size={16} />
    </button>
  </Link>
     
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">

        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center hover:bg-white p-4 rounded-md transition-colors duration-200">
            <div className="bg-primary p-2 rounded-full">
              <Icon size={30} className="text-white"/>
            </div>
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Hero;
