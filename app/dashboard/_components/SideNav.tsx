"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import UsageTrack from "./UsageTrack";

function SideNav() {
  const router = useRouter();
  const path = usePathname();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    // {
    //   name: "History",
    //   icon: FileClock,
    //   path: "/dashboard/history",
    // },
    // {
    //   name: "Billing",
    //   icon: WalletCards,
    //   path: "/dashboard/billing",
    // },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/Settings",
    },
  ];

  useEffect(() => {
    console.log(path);
  }, [path]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logoo.svg"} alt="logo" width={50} height={50} />
      </div>

      <hr className="my-5 border" />

      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(menu.path)}
            className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                ${path == menu.path && "bg-primary text-white"}
                `}
          >
            <menu.icon className="h-6 w-6" />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
